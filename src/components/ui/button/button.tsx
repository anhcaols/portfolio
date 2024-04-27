import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";
import styles from "./styles.module.scss";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: `bg-primary ${styles.buttonWrapper} ${styles.btnEffect}`,
        outline: `${styles.buttonWrapper} ${styles.btnEffect}`,
        link: "text-primary underline-offset-4 hover:underline",
        destructive: "bg-destructive shadow hover:bg-destructive/90",
        ghost: "bg-transparent shadow",
        icon: "bg-transparent shadow hover:bg-primary"
      },
      size: {
        sm: "h-8 rounded-md px-3 text-base !rounded-none",
        default: `h-10 px-5 text-lg !rounded-none text-xl`,
        lg: "h-12 rounded-md px-6 text-xl !rounded-none"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <div>
        <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
          <span className={styles.borderFade}></span>
          <span className={styles.effect}>{children}</span>
        </Comp>
      </div>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
