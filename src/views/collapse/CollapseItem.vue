<script setup lang="ts">
import { collapseKey } from '@/constants/keys'
import type { CollapseItemProps, nameType } from './types'

const props = defineProps<CollapseItemProps>()

const handleItemClick = inject<(name: nameType) => void>(collapseKey, () => {})
</script>

<template>
  <div class="yi-collapse-item">
    <div
      :id="`item-header-${props.name}`"
      class="yi-collapse-item__header"
      :class="{
        'is-disabled': props.disabled,
      }"
      @click="handleItemClick(props.name)"
    >
      <slot name="title">{{ props.title }}</slot>
    </div>
    <Transition name="fade">
      <div
        v-show="props.showContent || props.disabled"
        :id="`item-content-${props.name}`"
        class="yi-collapse-item__wrap"
      >
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: max-height 0.5s ease;
  max-height: 999px;
}
.fade-enter-from,
.fade-leave-to {
  max-height: 0;
}

.yi-collapse-item__header {
  width: 100%;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  height: var(--yi-collapse-header-height);
  line-height: var(--yi-collapse-header-height);
  background-color: var(--yi-collapse-header-bg-color);
  color: var(--yi-collapse-header-text-color);
  cursor: pointer;
  border-bottom: 1px solid var(--yi-collapse-border-color);
  font-size: var(--yi-collapse-header-font-size);
  font-weight: 500;
  transition: border-bottom-color var(--yi-transition-duration);
  outline: none;

  &.is-disabled {
    cursor: not-allowed;
    pointer-events: none;
    color: var(--yi-disabled-text-color);
  }
}
.yi-collapse-item__wrap {
  will-change: height;
  background-color: var(--yi-collapse-content-bg-color);
  overflow: hidden;
  box-sizing: border-box;
  border-bottom: 1px solid var(--yi-collapse-border-color);
}
</style>
