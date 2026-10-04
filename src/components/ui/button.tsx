import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-transform duration-150 ease-out disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        primary: "bg-cream text-ink hover:scale-105",
        ink: "bg-ink text-on-ink hover:scale-105",
        water: "bg-water text-on-ink hover:scale-105",
        outline:
          "border border-line-strong bg-transparent text-fg hover:bg-mist",
        ghost: "bg-transparent text-on-ink-muted hover:text-on-ink",
        darkGhost: "bg-transparent text-fg-muted hover:text-fg",
      },
      size: {
        sm: "rounded-md px-4 py-2 text-sm",
        md: "rounded-lg px-5 py-2.5 text-sm sm:px-6 sm:py-3",
        lg: "rounded-full px-8 py-3.5 text-base",
        icon: "size-11 rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
