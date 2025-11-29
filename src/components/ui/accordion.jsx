import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../utils/cn'

export const Accordion = AccordionPrimitive.Root

export const AccordionItem = ({ className, ...props }) => (
  <AccordionPrimitive.Item
    className={cn('rounded-2xl border border-white/10 mb-4 overflow-hidden backdrop-blur-xl', className)}
    {...props}
  />
)

export const AccordionTrigger = ({ className, children, ...props }) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      className={cn(
        'flex flex-1 items-center justify-between gap-4 px-6 py-5 text-left text-white text-lg font-medium transition-all hover:bg-white/5',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-5 w-5 text-cyber-blue transition-transform duration-300 data-[state=open]:rotate-180" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
)

export const AccordionContent = ({ className, children, ...props }) => (
  <AccordionPrimitive.Content
    className={cn(
      'px-6 pb-6 text-white/70 text-sm leading-relaxed data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      className,
    )}
    {...props}
  >
    {children}
  </AccordionPrimitive.Content>
)
