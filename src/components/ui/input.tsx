import * as React from "react";

import { cn } from "@/lib/utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full border border-accent bg-transparent px-3 py-1 text-base transition-all duration-300 ease-in-out file:bg-transparent  placeholder:text-gray hover:border-primary focus:border-primary focus:outline-none",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export {Input};
