export interface TooltipProps {
  content: string
  disabled?: boolean
  placement?: 'top' | 'bottom' | 'left' | 'right'
  delay?: number
  offset?: number
  trigger?: 'hover' | 'click' | 'focus' | 'manual'
  visible?: boolean
  hideDelay?: number
  showDelay?: number
  arrow?: boolean
  arrowOffset?: number
  arrowColor?: string
  arrowSize?: number
  arrowShadow?: boolean
}
