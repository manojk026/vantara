import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function QtyControl({
  value,
  onChange,
  min = 1,
  max = 99,
  className,
}: {
  value: number;
  onChange: (n: number) => void;
  min?: number;
  max?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex h-11 items-center rounded-md border border-line-strong bg-cream",
        className,
      )}
    >
      <button
        type="button"
        className="inline-flex size-11 items-center justify-center text-fg-muted hover:text-fg"
        aria-label="Decrease quantity"
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        <Minus className="size-4" />
      </button>
      <span className="min-w-8 text-center text-sm font-medium tabular-nums">
        {value}
      </span>
      <button
        type="button"
        className="inline-flex size-11 items-center justify-center text-fg-muted hover:text-fg"
        aria-label="Increase quantity"
        onClick={() => onChange(Math.min(max, value + 1))}
      >
        <Plus className="size-4" />
      </button>
    </div>
  );
}
