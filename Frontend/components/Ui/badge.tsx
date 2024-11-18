import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        people: "bg-pink-100 text-pink-500 border-pink-500",
        new: "border-blue-2 text-blue-2 bg-blue-1",
        negotiation: "border-purple-1 text-purple-1 bg-purple-3",
        success: "border-teal-600 text-teal-900 bg-teal-100",
        danger: "border-rose-600 text-rose-900 bg-rose-100",
        assigned: "bg-cyan-400 text-white border-cyan-950",
        hold: "bg-amber-600 text-white",
        waiting: "text-amber-600 border-amber-600 bg-amber-100",
        linkedin: "bg-blue-2 text-white",
        socialmedia: "bg-indigo-900 text-white",
        website: "bg-orange-500 text-white",
        advertising: "bg-green-800 text-white",
        friend: "bg-rose-900 text-white",
        networks:  "bg-pink-400 text-white",
        referral: "bg-fuchsia-600 text-white",
        sales: "bg-purple-600 text-white"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
