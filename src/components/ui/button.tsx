
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-warm-gold to-warm-gold/90 text-white hover:from-warm-gold/90 hover:to-warm-gold/80 hover:shadow-lg hover:scale-[1.02] transform transition-all duration-300",
        destructive:
          "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 hover:shadow-lg hover:scale-[1.02] transition-all duration-300",
        outline:
          "border-2 border-warm-gold bg-transparent hover:bg-warm-gold hover:text-white hover:shadow-md hover:scale-[1.02] transition-all duration-300",
        secondary:
          "bg-gradient-to-r from-soft-peach to-soft-pink text-deep-brown hover:from-soft-pink hover:to-warm-gold/60 hover:shadow-md hover:scale-[1.02] transition-all duration-300",
        ghost: "hover:bg-warm-gold/10 hover:text-warm-gold hover:shadow-sm transition-all duration-300",
        link: "text-warm-gold underline-offset-4 hover:underline hover:text-warm-gold/80 transition-colors duration-300",
      },
      size: {
        default: "h-11 px-6 py-2 text-base font-medium",
        sm: "h-9 rounded-md px-4 text-sm",
        lg: "h-12 rounded-lg px-8 text-lg font-semibold",
        icon: "h-11 w-11",
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
        <span className="relative z-10 transition-all duration-300">
          {children}
        </span>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
