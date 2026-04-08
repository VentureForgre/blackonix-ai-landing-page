type MaterialSymbolProps = {
  icon: string;
  className?: string;
};

export function MaterialSymbol({ icon, className }: MaterialSymbolProps) {
  return (
    <span
      aria-hidden="true"
      className={["material-symbols-outlined", className].filter(Boolean).join(" ")}
    >
      {icon}
    </span>
  );
}
