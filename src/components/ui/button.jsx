/* eslint-disable react-refresh/only-export-components */
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap gap-2",
    "rounded-[4px]",
    "font-lato",
    "font-normal",
    "transition-all duration-200",
    "outline-none",

    // default size
    "h-12 px-6 text-sm",

    // default colors
    "bg-[#DA6C74]",
    "text-white",
    "hover:bg-[#c95a63]",

    // disabled state
    "disabled:pointer-events-none",
    "disabled:cursor-not-allowed",
    "disabled:bg-[#EFEFEF]",
    "disabled:text-[#989898]",

    "cursor-pointer",
  ],
  {
    variants: {
      variant: {
        primary: "",

        secondary: "bg-[#184A61] hover:bg-[#12394b]",

        outline:
          "border border-[#DA6C74] bg-transparent text-[#DA6C74] hover:bg-[#DA6C74]/10",

        ghost: "bg-transparent text-[#184A61] hover:bg-[#184A61]/10",
      },

      size: {
        default: "",
        sm: "h-10 px-4 text-sm",
        lg: "h-14 px-8 text-base",
        icon: "size-12 p-0",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  children,
  disabled,
  ...props
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      disabled={disabled || loading}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {loading ? <Loader2 className="size-4 animate-spin" /> : children}
    </Comp>
  );
}

export { Button, buttonVariants };
