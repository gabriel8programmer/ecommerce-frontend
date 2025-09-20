import { cn } from "@/lib/utils";
import React from "react";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? 'span' : 'button';
    
    return (
      <Comp
        className={cn(
          'btn',
          {
            'btn-primary': variant === 'default',
            'btn-secondary': variant === 'secondary',
            'btn-accent': variant === 'accent',
            'btn-outline': variant === 'outline',
            'btn-ghost': variant === 'ghost',
            'btn-link': variant === 'link',
            'h-10 px-4 py-2': size === 'default',
            'h-9 rounded-md px-3': size === 'sm',
            'h-11 rounded-md px-8': size === 'lg',
            'h-10 w-10': size === 'icon',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };