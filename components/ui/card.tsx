type CardProps = React.ComponentPropsWithoutRef<"div"> & {
  glass?: boolean;
};

function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function Card({ className, glass = false, ...props }: CardProps) {
  return (
    <div
      className={classNames(
        "rounded-xl border border-white/5 bg-surface-container-high",
        glass && "glass-panel border-white/8 bg-transparent",
        className
      )}
      {...props}
    />
  );
}
