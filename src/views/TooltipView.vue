<script setup lang="ts">
import type Tooltip from '@/components/tooltip/Tooltip.vue'
import ButtonView from './button/ButtonView.vue'

const tooltip = useTemplateRef<InstanceType<typeof Tooltip>>('tooltip')
</script>
<template>
  <Tooltip
    ref="tooltip"
    trigger="manual"
    placement="right-start"
    transition="fade"
    :options="{ placement: 'right' }"
    :open-delay="200"
    :close-delay="200"
  >
    <ButtonView type="primary">Button</ButtonView>
    <!-- <div style="margin: 100px auto; width: 100px; border: 1px solid red">123</div> -->
    <template #content>
      <div>this is Tooltip</div>
    </template>
  </Tooltip>

  <ButtonView type="primary" @click="tooltip?.openPopper">show</ButtonView>
  <ButtonView type="warning" @click="tooltip?.closePopper">hide</ButtonView>
</template>
<style scoped></style>
