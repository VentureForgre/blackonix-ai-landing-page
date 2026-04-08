type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  pulseDot?: boolean;
};

function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function Badge({ children, className, pulseDot = false }: BadgeProps) {
  return (
    <div
      className={classNames(
        "inline-flex items-center gap-2 rounded-full border border-white/5 bg-surface-container-highest px-4 py-1.5 backdrop-blur-md",
        className
      )}
    >
      {pulseDot ? (
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-primary" />
        </span>
      ) : null}
      <span className="font-label text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
        {children}
      </span>
    </div>
  );
}
