<script setup lang="ts">
import ButtonView from './button/ButtonView.vue'
import CollapseView from './collapse/CollapseView.vue'
import CollapseItem from './collapse/CollapseItem.vue'
import type { CollapseItemProps } from './collapse/types'
import html2canvas from 'html2canvas'

const qq = ref(null)

const el = useTemplateRef<InstanceType<typeof ButtonView>>('button')
const a = 1
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

const createPicture = () => {
  // 获取要转换的元素
  const imgDom: any = document.querySelector('.bottom')
  // 拿到目标dom调用一下html2canvas方法就能生成canvas对象了
  // 获取要转换的元素
  html2canvas(imgDom, {
    useCORS: true, // 开启跨域设置，需要后台设置cors
  }).then((canvas) => {
    // toDataURL函数生成img标签的可用数据  图片格式转成 base64
    const dataURL = canvas.toDataURL('image/png')
    console.log(dataURL)
  })
}

onMounted(() => {})
</script>
<template>
  <div class="top" @click="createPicture">123</div>
  <div class="bottom">
    <Icon icon="123" size="qwe" color="#333"></Icon>
    <div>
      <ButtonView ref="button" loading type="primary">button</ButtonView>
      <ButtonView @click="createPicture" ref="button" icon="icon-dizhipipei">button</ButtonView>
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
  </div>
</template>
<style scoped>
.top {
  position: absolute;
  z-index: 10;
  inset: 0;
  background-color: red;
}
.bottom {
  position: absolute;
}
</style>
