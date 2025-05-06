<script setup lang="ts">
export interface IProps {
  name?: string
  mode?: 'in-out' | 'out-in' | 'default'
  appear?: boolean
  enterClass?: string
  leaveClass?: string
  userAnimateCss?: boolean
}
const {
  name = 'animate__animated',
  mode = 'out-in',
  appear = false,
  userAnimateCss = true,
  enterClass = 'animate__fadeIn',
  leaveClass = 'animate__fadeOut',
} = defineProps<IProps>()

const enterActiveClass = computed(() => {
  return userAnimateCss ? `animate__animated ${enterClass}` : enterClass
})
const leaveActiveClass = computed(() => {
  return userAnimateCss ? `animate__animated ${leaveClass}` : leaveClass
})
</script>

<template>
  <Transition
    :name="name"
    :mode="mode"
    :appear="appear"
    :enter-active-class="enterActiveClass"
    :leave-active-class="leaveActiveClass"
  >
    <slot></slot>
  </Transition>
</template>

<style scoped lang="less">
.animate__animated {
  animation-duration: 0.2s;
}
</style>
