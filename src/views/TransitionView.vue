<script setup lang="ts">
import AnimateCss from '@/components/AnimateCss.vue'

const show = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
const type = ref('1')
ref(false)
</script>
<template>
  <van-button type="primary" @click="show = !show">click</van-button>
  <Transition name="fade">
    <p v-if="show">Manju Patra</p>
  </Transition>
  <van-button type="primary" @click="show2 = !show2">click</van-button>
  <Transition name="bounce">
    <p v-if="show2">bounce</p>
  </Transition>
  <van-button type="primary" @click="show3 = !show3">click</van-button>
  <!--  <Transition-->
  <!--    name="animation"-->
  <!--    enter-active-class="animate__animated animate__tada"-->
  <!--    leave-active-class="animate__animated animate__bounceOutRight"-->
  <!--  >-->
  <!--    <p v-if="show3">animation</p>-->
  <!--  </Transition>-->
  <van-button type="primary" @click="show3 = !show3">click</van-button>
  <AnimateCss enter-class="animate__fadeInDown" leave-class="animate__fadeOutDown">
    <p v-if="type === '1'" @click="type = '2'">animation1</p>
    <p v-else-if="type === '2'" @click="type = '3'">animation2</p>
    <p v-else @click="type = '1'">animation3</p>
  </AnimateCss>
  <br />
  <van-button type="warning" @click="show4 = !show4">click</van-button>

  <div :class="['demo', { demo2: show4 }]">demo</div>
</template>

<style scoped lang="less">
.demo33 {
  width: 30px;
  background-color: blue;
  transition: width 2s ease 1s;
  color: #fff;
}
.demo.demo2 {
  width: 100px;
}

.fade-enter-active {
  transition: all 1s ease-out;
}
.fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter-from,
.fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce 1s ease-out;
}
.bounce-leave-active {
  animation: bounce 1s reverse;
}
@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
