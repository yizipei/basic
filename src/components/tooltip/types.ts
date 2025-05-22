import type { Options, Placement } from '@popperjs/core'

export interface TooltipProps {
  content?: string
  disabled?: boolean
  placement?: Placement
  delay?: number
  offset?: number
  trigger?: 'hover' | 'click' | 'focus' | 'manual'
  visible?: boolean
  options?: Partial<Options>
  transition?: 'fade' | 'slide'
  openDelay?: number
  closeDelay?: number
}
