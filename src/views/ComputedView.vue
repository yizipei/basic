<script setup lang="ts">
import { type WritableComputedOptions } from 'vue'

const author: IAuthor = reactive({ name: 'zhangsan', books: [] })

const cpBooks = computed(() => {
  return author.books.length ? 'yes' : 'no'
})

const addBook = () => {
  author.books.push('new book')
}

const firstName = ref<string>('zipei')
const lastName = ref<string>('yi')
const fullName = computed<string>({
  get: (previous): string => {
    console.log(previous)

    return `${firstName.value} ${lastName.value}`
  },
  set: (v: string): void => {
    ;[firstName.value, lastName.value] = v.split(' ')
  },
} as WritableComputedOptions<string, string>)
console.log(123)

const setFullName = () => {
  console.log(123)

  fullName.value = 'yao miao'
}

const x = ref(1)
const y = ref(2)

watch(x, (newValue, oldValue) => {})
watch([x, () => y.value], (newValue, oldValue) => {})
const z = reactive({ a: 1, b: 2 })
watch(
  () => z.a,
  (newValue, oldValue) => {},
)
</script>

<template>
  <h1>{{ fullName }}</h1>
  <van-button type="primary" @click="setFullName">click</van-button>
  <van-tag type="success">123{{ cpBooks }}</van-tag>
  <van-button type="warning" @click="addBook">demo</van-button>
</template>
