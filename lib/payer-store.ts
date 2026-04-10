import { mkdirSync } from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";

import { getOptionalEnv } from "./env";

export type ConfirmedPayerRecord = {
  sessionId: string;
  email: string;
  tierId: string;
  tierName: string;
  paymentStatus: string;
  customerId?: string | null;
  createdAt: string;
};

type PaymentRow = {
  session_id: string;
  email: string;
  tier_id: string;
  tier_name: string;
  payment_status: string;
  customer_id: string | null;
  created_at: string;
};

declare global {
  var __blackonixPaymentsDb: DatabaseSync | undefined;
}

function getDatabasePath() {
  const configuredPath = getOptionalEnv("SQLITE_DATABASE_PATH");
  if (configuredPath) {
    return path.isAbsolute(configuredPath)
      ? configuredPath
      : path.join(/*turbopackIgnore: true*/ process.cwd(), configuredPath);
  }

  return path.join(/*turbopackIgnore: true*/ process.cwd(), "data", "payments.db");
}

function getDatabase() {
  if (!globalThis.__blackonixPaymentsDb) {
    const databasePath = getDatabasePath();
    mkdirSync(path.dirname(databasePath), { recursive: true });

    const database = new DatabaseSync(databasePath);
    database.exec(`
      CREATE TABLE IF NOT EXISTS confirmed_payers (
        session_id TEXT PRIMARY KEY,
        email TEXT NOT NULL,
        tier_id TEXT NOT NULL,
        tier_name TEXT NOT NULL,
        payment_status TEXT NOT NULL,
        customer_id TEXT,
        created_at TEXT NOT NULL
      )
    `);

    globalThis.__blackonixPaymentsDb = database;
  }

  return globalThis.__blackonixPaymentsDb;
}

export function upsertConfirmedPayer(record: ConfirmedPayerRecord) {
  const database = getDatabase();
  const statement = database.prepare(`
    INSERT INTO confirmed_payers (
      session_id,
      email,
      tier_id,
      tier_name,
      payment_status,
      customer_id,
      created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(session_id) DO UPDATE SET
      email = excluded.email,
      tier_id = excluded.tier_id,
      tier_name = excluded.tier_name,
      payment_status = excluded.payment_status,
      customer_id = excluded.customer_id,
      created_at = excluded.created_at
  `);

  statement.run(
    record.sessionId,
    record.email,
    record.tierId,
    record.tierName,
    record.paymentStatus,
    record.customerId ?? null,
    record.createdAt
  );
}

export function getConfirmedPayerBySessionId(sessionId: string) {
  const database = getDatabase();
  const statement = database.prepare(
    "SELECT session_id, email, tier_id, tier_name, payment_status, customer_id, created_at FROM confirmed_payers WHERE session_id = ?"
  );
  const row = statement.get(sessionId) as PaymentRow | undefined;

  if (!row) {
    return null;
  }

  return {
    sessionId: row.session_id,
    email: row.email,
    tierId: row.tier_id,
    tierName: row.tier_name,
    paymentStatus: row.payment_status,
    customerId: row.customer_id,
    createdAt: row.created_at
  };
}
