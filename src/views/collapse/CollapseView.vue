<script setup lang="ts">
import type { CollapseProps, nameType } from './types'
import { collapseKey } from '@/constants/keys'

const props = withDefaults(defineProps<CollapseProps>(), {
  accordion: false,
})

const activeNames = defineModel<nameType[]>({ default: () => [] })
console.log('model', activeNames.value)

const handleItemClick = (name: nameType) => {
  if (props.accordion) {
    activeNames.value = activeNames.value.length && activeNames.value.includes(name) ? [] : [name]
  } else {
    const index = activeNames.value.indexOf(name)
    if (index > -1) {
      activeNames.value.splice(index, 1)
    } else {
      activeNames.value.push(name)
    }
  }
  console.log(activeNames)
}
provide(collapseKey, handleItemClick)
</script>

<template>
  <div class="yi-collapse">
    <slot></slot>
  </div>
</template>

<style scoped>
.yi-collapse {
  --yi-collapse-border-color: var(--yi-border-color-lighter);
  --yi-collapse-header-height: 48px;
  --yi-collapse-header-bg-color: var(--yi-fill-color-blank);
  --yi-collapse-header-text-color: var(--yi-text-color-primary);
  --yi-collapse-header-font-size: 13px;
  --yi-collapse-content-bg-color: var(--yi-fill-color-blank);
  --yi-collapse-content-font-size: 13px;
  --yi-collapse-content-text-color: var(--yi-text-color-primary);

  border-top: 1px solid var(--yi-collapse-border-color);
  border-bottom: 1px solid var(--yi-collapse-border-color);
}
</style>
