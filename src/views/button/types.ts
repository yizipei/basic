export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'small' | 'medium' | 'large'
export type NativeType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  disabled?: boolean
  block?: boolean
  icon?: string
  loading?: boolean
  round?: boolean
  circle?: boolean
  plain?: boolean
  text?: boolean
  dashed?: boolean
  outline?: boolean
  ghost?: boolean
  shadow?: boolean
  shadowColor?: string
  shadowBlur?: number
  shadowOffsetX?: number
  shadowOffsetY?: number
  nativeType?: NativeType
  autofocus?: boolean
}
