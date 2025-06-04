
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-1000 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group cursor-pointer transform-gpu will-change-transform",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-warm-gold via-soft-pink to-soft-peach text-primary-foreground hover:from-warm-gold/95 hover:via-soft-pink/95 hover:to-soft-peach/95 hover:scale-[1.15] hover:shadow-3xl hover:shadow-warm-gold/50 transform-gpu active:scale-110 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1500 hover:brightness-115 hover:saturate-125 hover:contrast-110 after:absolute after:inset-0 after:bg-gradient-to-45deg after:from-warm-gold/20 after:via-transparent after:to-soft-pink/20 after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-1000",
        destructive:
          "bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-destructive-foreground hover:from-red-600 hover:via-red-700 hover:to-red-800 hover:scale-[1.15] hover:shadow-3xl hover:shadow-red-500/50 transform-gpu active:scale-110 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1500 hover:brightness-115 hover:saturate-125",
        outline:
          "border-2 border-warm-gold bg-gradient-to-br from-transparent via-soft-peach/15 to-soft-pink/15 hover:from-soft-peach/40 hover:via-soft-pink/40 hover:to-warm-gold/30 hover:bg-accent hover:text-accent-foreground hover:scale-[1.15] hover:shadow-3xl hover:border-soft-pink hover:shadow-soft-pink/40 transform-gpu active:scale-110 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-warm-gold/25 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1500 hover:brightness-115 hover:saturate-125",
        secondary:
          "bg-gradient-to-br from-soft-peach via-soft-pink to-warm-gold/60 text-secondary-foreground hover:from-soft-pink hover:via-warm-gold/90 hover:to-soft-peach hover:scale-[1.15] hover:shadow-3xl hover:shadow-soft-pink/50 transform-gpu active:scale-110 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1500 hover:brightness-115 hover:saturate-125",
        ghost: "hover:bg-gradient-to-br hover:from-soft-peach/50 hover:via-soft-pink/50 hover:to-warm-gold/40 hover:text-accent-foreground hover:scale-[1.15] hover:shadow-2xl hover:shadow-soft-pink/35 transform-gpu active:scale-110 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-soft-pink/35 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1500 hover:brightness-115 hover:saturate-125",
        link: "text-primary underline-offset-4 hover:underline hover:text-warm-gold hover:scale-[1.15] transition-all duration-700 hover:drop-shadow-xl active:scale-110 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-warm-gold after:to-soft-pink hover:after:w-full after:transition-all after:duration-700 hover:brightness-115 hover:saturate-125",
      },
      size: {
        default: "h-12 px-6 py-3 text-base font-semibold",
        sm: "h-10 rounded-md px-4 text-sm font-medium",
        lg: "h-14 rounded-lg px-10 text-lg font-bold",
        icon: "h-12 w-12 text-lg",
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
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-20 transition-all duration-500 group-hover:scale-110 group-active:scale-100 group-hover:drop-shadow-lg">
          {children}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-warm-gold/0 via-warm-gold/25 to-warm-gold/0 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-45deg from-soft-pink/0 via-soft-pink/20 to-soft-pink/0 opacity-0 group-hover:opacity-100 transition-all duration-1000 blur-md z-5 group-hover:animate-pulse"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-warm-gold via-soft-pink to-soft-peach rounded-lg opacity-0 group-hover:opacity-30 transition-all duration-1000 blur-xl z-0 group-hover:animate-pulse"></div>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
