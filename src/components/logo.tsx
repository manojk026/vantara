import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("size-8", className)}
      aria-hidden="true"
    >
      <rect x="7" y="7" width="50" height="50" rx="15" fill="currentColor" />
      <path
        d="M18 44 29 18h6l11 26h-7l-2.3-5.5H27.3L25 44h-7Zm10.2-6.8h7.6L32 24.4l-3.8 12.8Z"
        fill="#f4f1ea"
      />
      <path
        d="M40 20c2.2 0 4 1.7 4 3.8 0 3.5-3.5 6.2-6.3 8.7-1.6 1.4-2.7 2.7-2.7 4.4 0 1.8 1.7 3.1 3.7 3.1 1.6 0 3.1-.8 4-2.1l1.9 1.8c-1.4 2.4-4 3.8-6.9 3.8-4 0-7.1-2.7-7.1-6.3 0-3.1 2.5-5.5 5.7-8l1.1-.9c1.4-1.2 2.5-2.1 2.5-3.4 0-1.1-.8-1.9-2.2-1.9-1.5 0-2.8.8-3.7 2.2l-2.1-1.8c1.4-2 3.5-3.2 6-3.2Z"
        fill="#f4f1ea"
        opacity={0.9}
      />
    </svg>
  );
}

export function BrandSticker({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border px-2.5 py-1.5 shadow-sm backdrop-blur-sm",
        dark
          ? "border-white/15 bg-slate-950/30 text-white"
          : "border-slate-900/10 bg-white/80 text-slate-900",
        className,
      )}
    >
      <span
        className={cn(
          "flex size-7 items-center justify-center rounded-full",
          dark ? "bg-white/12 text-white" : "bg-sky-950 text-white",
        )}
      >
        <LogoMark className="size-5" />
      </span>
      <div className="leading-none">
        <div className="text-[9px] font-semibold tracking-[0.26em] uppercase opacity-70">
          Premium water
        </div>
        <div className="mt-1 text-[11px] font-semibold tracking-[0.22em] uppercase">
          Vantara
        </div>
      </div>
    </div>
  );
}

export function Logo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <LogoMark className={markClassName} />
      <span className="text-lg font-semibold tracking-tight sm:text-xl">
        Vantara
      </span>
    </span>
  );
}
