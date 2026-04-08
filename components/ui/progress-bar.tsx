type ProgressBarProps = {
  value: number;
  className?: string;
  trackClassName?: string;
  label?: string;
};

function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function ProgressBar({
  value,
  className,
  trackClassName,
  label = "Campaign progress"
}: ProgressBarProps) {
  return (
    <div
      className={classNames(
        "h-4 w-full rounded-full border border-white/5 bg-surface-container-highest p-1",
        trackClassName
      )}
      role="progressbar"
      aria-label={label}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={classNames(
          "kinetic-gradient h-full rounded-full shadow-[0_0_20px_rgba(163,255,18,0.5)]",
          className
        )}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
