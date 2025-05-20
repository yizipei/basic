export interface CollapseItemProps {
  title: string
  name: string
  disabled?: boolean
  icon?: string
  iconPosition?: 'left' | 'right'
  iconSize?: number
  iconColor?: string
  iconActiveColor?: string
  iconActive?: string
  iconActiveSize?: number
  showContent?: boolean
}

export interface CollapseProps {
  accordion?: boolean
  disabled?: boolean
  iconPosition?: 'left' | 'right'
  iconSize?: number
  iconColor?: string
  iconActiveColor?: string
  iconActive?: string
  iconActiveSize?: number
}

export type nameType = string | number
