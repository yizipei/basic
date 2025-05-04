<script setup lang="ts">
interface IProps {
  title?: string
  content?: string
  book?: IBook
  fontSize?: string
  type?: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'default'
  disabled?: number | boolean
}

const {
  title = 'default title',
  content = 'default content',
  book = { author: 'qq' },
  fontSize,
  type = 'default2',
  disabled,
} = defineProps<IProps>()
const emit = defineEmits<{
  'enlarge-text': []
}>()
const visible = ref(false)
</script>

<template>
  <div>disabled :{{ disabled }} {{ typeof disabled }}</div>
  <transition name="van-fade">
    <div v-show="visible">Fade</div>
  </transition>
  <VanSpace align="baseline">
    <VanButton @click="visible = !visible">按钮</VanButton>
    <div style="height: 30vw">{{ title }}</div>
    <div style="height: 30vw" :style="{ fontSize: $pxToVw(fontSize) }">{{ content }}</div>
    <div style="height: 30vw">{{ book?.author }}</div>
    <div style="height: 30vw">{{ type }}</div>
    <van-button
      type="primary"
      dlkjflsjd="23"
      dklsfj="doo"
      aa="1"
      dd="4"
      ff="5"
      @click="emit('enlarge-text')"
    >
      enlarge font size
    </van-button>
  </VanSpace>
</template>
