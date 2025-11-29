import { cn } from '../../utils/cn'

export function Card({ className, ...props }) {
  return <div className={cn('glass-card rounded-2xl border border-white/10 shadow-glow', className)} {...props} />
}

export function CardHeader({ className, ...props }) {
  return <div className={cn('mb-6 flex flex-col gap-2', className)} {...props} />
}

export function CardTitle({ className, ...props }) {
  return <h3 className={cn('text-xl font-semibold tracking-tight text-white', className)} {...props} />
}

export function CardDescription({ className, ...props }) {
  return <p className={cn('text-sm text-white/70', className)} {...props} />
}

export function CardContent({ className, ...props }) {
  return <div className={cn('text-sm text-white/80', className)} {...props} />
}

export function CardFooter({ className, ...props }) {
  return <div className={cn('mt-6 flex items-center', className)} {...props} />
}
