<script setup lang="ts">
let url = '111' // ref('https://jsonplaceholder.typicode.com/todos/1')

const { data, error } = useFetch(() => url)
setTimeout(() => {
  url = '2222'
}, 3000)
if (error.value) {
  console.log(error.value)
}

const ipt = ref('')
const vFocus = {
  mounted: (el: HTMLInputElement) => {
    el.focus()
  },
}
const itemNode = useTemplateRef<HTMLElement[]>('item')

const { x, y } = useMouse()

onMounted(() => {
  ;(itemNode.value as HTMLElement[]).forEach((item: HTMLElement) => {
    const react = item.getBoundingClientRect()
    console.log(react)

    watchEffect(() => {
      const left = x.value - react.width / 2 - react.left
      const top = y.value - react.width / 2 - react.top
      item.style.setProperty('--x', `${left}px`)
      item.style.setProperty('--y', `${top}px`)
    })
  })
})

// const transformX =
</script>
<template>
  <h1>x: {{ x }} y: {{ y }}</h1>
  <div class="container">
    <div class="item" ref="item" v-for="item in 12">
      <div class="sub-item">{{ item }}</div>
    </div>
  </div>
  <!--  <div v-drag>23</div>-->
  <!--  <br>-->
  <!--  <input type="text" v-focus v-model="ipt" />-->
  <!--  <h1 v-if="error">error</h1>-->
  <!--  <h1 v-else-if="data">{{ data }}</h1>-->
  <!--  <h1 v-else>loading</h1>-->
</template>
<style lang="less">
.container {
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, [c] 50px);
  grid-template-rows: repeat(3, 50px);
  grid-gap: 2px 2px;
  align-items: stretch;
  justify-content: center;
  align-content: center;
  background-color: black;

  .item {
    border: 1px solid black;
    box-sizing: border-box;
    display: block;
    background-color: rgba(255, 255, 255, 0.1);
    overflow: hidden;
    position: relative;
    border-radius: 5px;

    //--x: 10px;
    //--y: 10px;

    &:before {
      content: '';
      position: absolute;
      inset: 0;
      // 环形渐变
      background: radial-gradient(white, transparent 80%);
      transform: translate(var(--x, -10000px), var(--y, -10000px));
    }

    .sub-item {
      border-radius: inherit;
      position: absolute;
      inset: 2px;
      background-color: #3b3b3b;
    }
  }
}
</style>
