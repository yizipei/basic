import type { nameType } from '@/views/collapse/types'

export const collapseKey = Symbol() as InjectionKey<(name: nameType) => void>
