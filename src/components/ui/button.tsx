
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-warm-gold to-soft-pink text-primary-foreground hover:from-warm-gold/90 hover:to-soft-pink/90 hover:scale-105 hover:shadow-xl hover:shadow-warm-gold/25",
        destructive:
          "bg-gradient-to-r from-red-500 to-red-600 text-destructive-foreground hover:from-red-600 hover:to-red-700 hover:scale-105 hover:shadow-xl hover:shadow-red-500/25",
        outline:
          "border border-input bg-gradient-to-r from-transparent to-transparent hover:from-soft-peach/20 hover:to-soft-pink/20 hover:bg-accent hover:text-accent-foreground hover:scale-105 hover:shadow-lg hover:border-warm-gold",
        secondary:
          "bg-gradient-to-r from-secondary to-soft-peach text-secondary-foreground hover:from-soft-peach hover:to-soft-pink hover:scale-105 hover:shadow-xl hover:shadow-soft-pink/25",
        ghost: "hover:bg-gradient-to-r hover:from-soft-peach/30 hover:to-soft-pink/30 hover:text-accent-foreground hover:scale-105 hover:shadow-lg",
        link: "text-primary underline-offset-4 hover:underline hover:text-warm-gold hover:scale-105 transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
