<script setup lang="ts">
import ButtonView from './button/ButtonView.vue'
import CollapseView from './collapse/CollapseView.vue'
import CollapseItem from './collapse/CollapseItem.vue'
import type { CollapseItemProps } from './collapse/types'
import Icon from '@/components/Icon.vue'

const el = useTemplateRef<InstanceType<typeof ButtonView>>('button')

const collapseData: Omit<CollapseItemProps, 'activeNames'>[] = [
  {
    title: '标题1',
    name: '1',
    disabled: true,
  },
  {
    title: '标题2',
    name: '2',
  },
]

const activeNames = ref(['1'])

onMounted(() => {})
</script>
<template>
  <Icon icon="icon-tongji1" size="100" />
  <div>
    <ButtonView ref="button" type="primary">button</ButtonView>
    <ButtonView ref="button" type="danger">button</ButtonView>
    <ButtonView ref="button" type="info">button</ButtonView>
    <ButtonView ref="button" type="success">button</ButtonView>
    <ButtonView ref="button" type="warning">button</ButtonView>
    <br />
    <ButtonView ref="button" plain type="primary">button</ButtonView>
    <ButtonView ref="button" plain type="danger">button</ButtonView>
    <ButtonView ref="button" plain type="info">button</ButtonView>
    <ButtonView ref="button" plain type="success">button</ButtonView>
    <ButtonView ref="button" plain type="warning">button</ButtonView>
    <br />
    <ButtonView ref="button" round>round</ButtonView>
    <br />
    <ButtonView ref="button" disabled>disabled</ButtonView>
    <br />
    <ButtonView ref="button" circle>button</ButtonView>
  </div>

  <br />
  <CollapseView v-model="activeNames" accordion>
    <CollapseItem
      v-for="item in collapseData"
      :key="item.name"
      :name="item.name"
      :title="item.title"
      :show-content="activeNames.includes(item.name)"
      :disabled="item.disabled"
    >
      {{ item }}
      {{ item }}
      {{ item }}
      {{ item }}
      {{ item }}
      {{ item }}
      <div>{{ item }}</div>
      {{ item }}
    </CollapseItem>
  </CollapseView>
</template>
