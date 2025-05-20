<script setup lang="ts">
import type { ButtonProps } from './types'
const props = withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
})

const root = useTemplateRef('root')
defineExpose({
  root,
})
</script>
<template>
  <button
    ref="root"
    class="yi-button"
    :class="{
      [`yi-button--${props.type}`]: props.type,
      [`yi-button--${props.size}`]: props.size,
      'is-plain': props.plain,
      'is-round': props.round,
      'is-circle': props.circle,
      'is-loading': props.loading,
      'is-disabled': props.disabled,
      'is-text': props.text,
      'is-dashed': props.dashed,
      'is-outline': props.outline,
      'is-ghost': props.ghost,
      'is-shadow': props.shadow,
      'is-block': props.block,
    }"
    :type="props.nativeType"
    :disabled="props.disabled || props.loading"
    :autofocus="props.autofocus"
  >
    <template v-if="props.loading">
      <Icon icon="icon-yansetongdao " color="#fff" spin />
    </template>
    <template v-else>
      <slot></slot>
      <Icon v-if="props.icon" :icon="props.icon" style="margin-left: 6px" />
    </template>
  </button>
</template>
<style>
.yi-button {
  padding: 8px 15px;
  font-size: var(--yi-font-size-base);
  border-radius: var(--yi-border-radius-base);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  height: 32px;
  white-space: nowrap;
  cursor: pointer;
  color: var(--yi-button-text-color);
  text-align: center;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  font-weight: var(--yi-button-font-weight);
  -webkit-user-select: none;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  -webkit-appearance: none;
  background-color: var(--yi-button-bg-color);
  border: var(--yi-border);
  border-color: var(--yi-button-border-color);

  & + & {
    margin-left: 12px;
  }

  &:hover {
    color: var(--yi-button-hover-text-color);
    border-color: var(--yi-button-hover-border-color);
    background-color: var(--yi-button-hover-bg-color);
    outline: none;
  }
  &:active {
    color: var(--yi-button-active-text-color);
    border-color: var(--yi-button-active-border-color);
    background-color: var(--yi-button-active-bg-color);
    outline: none;
  }
  &.is-round {
    border-radius: var(--yi-border-radius-round);
  }
  &.is-disabled {
    color: var(--yi-button-disabled-text-color);
    border-color: var(--yi-button-disabled-border-color);
    background-color: var(--yi-button-disabled-bg-color);
    cursor: not-allowed;
    pointer-events: none;
  }
  &.is-circle {
    width: 32px;
    border-radius: 50%;
    padding: 8px;
  }
}

@each $type in primary, success, warning, danger, error, info {
  .yi-button--$(type) {
    --yi-button-text-color: var(--yi-color-white);
    --yi-button-bg-color: var(--yi-color-$(type));
    --yi-button-border-color: var(--yi-color-$(type));
    --yi-button-outline-color: var(--yi-color-$(type)-light-5);
    --yi-button-active-color: var(--yi-color-$(type)-dark-2);
    --yi-button-hover-text-color: var(--yi-color-white);
    --yi-button-hover-link-text-color: var(--yi-color-$(type)-light-5);
    --yi-button-hover-bg-color: var(--yi-color-$(type)-light-3);
    --yi-button-hover-border-color: var(--yi-color-$(type)-light-3);
    --yi-button-active-bg-color: var(--yi-color-$(type)-dark-2);
    --yi-button-active-border-color: var(--yi-color-$(type)-dark-2);
    --yi-button-disabled-text-color: var(--yi-color-white);
    --yi-button-disabled-bg-color: var(--yi-color-$(type)-light-5);
    --yi-button-disabled-border-color: var(--yi-color-$(type)-light-5);

    &:hover {
      color: var(--yi-button-hover-text-color);
      border-color: var(--yi-button-hover-border-color);
      background-color: var(--yi-button-hover-bg-color);
      outline: none;
    }
    &:active {
      color: var(--yi-button-hover-text-color);
      border-color: var(--yi-button-active-border-color);
      background-color: var(--yi-button-active-bg-color);
      outline: none;
    }

    &.is-plain {
      --yi-button-text-color: var(--yi-color-$(type));
      --yi-button-bg-color: var(--yi-color-$(type)-light-9);
      --yi-button-border-color: var(--yi-color-$(type)-light-5);
      --yi-button-hover-text-color: var(--yi-color-white);
      --yi-button-hover-bg-color: var(--yi-color-$(type));
      --yi-button-hover-border-color: var(--yi-color-$(type));
      --yi-button-active-text-color: var(--yi-color-white);
    }
  }
}
</style>
