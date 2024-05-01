import * as React from "react";

import { cn } from "@/lib/utils/cn";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex h-10 min-h-[80px] w-full border border-accent bg-transparent px-3 py-1 pt-2  text-base transition-all duration-300 ease-in-out file:bg-transparent placeholder:text-gray hover:border-primary focus:border-primary focus:outline-none",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export {Textarea};
