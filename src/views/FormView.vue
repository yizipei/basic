<script setup lang="ts">
const formData = reactive({
  username: 'miao yao',
  password: '123456',
  radio: true,
  checkedData: [],
})

const selected = ref('A')

const toggle = ref('')

const dynamicTrueValue = 'A'
const dynamicFalseValue = 'B'
const submit = () => {
  console.log(toRaw(formData))
}

const pick = ref('')
const first = 'A'
const second = 'B'

const num = ref(0)
</script>
<template>
  <input type="text" v-model.number="num" />

  <h2>num: {{ num }} {{ typeof num }}</h2>

  <input type="radio" v-model="pick" checked :value="first" />
  <input type="radio" v-model="pick" :value="second" />
  <h2>pick Value: {{ pick }}</h2>
  <input
    type="checkbox"
    v-model="toggle"
    :true-value="dynamicTrueValue"
    :false-value="dynamicFalseValue"
  />
  toggle Value: {{ toggle }}

  <van-form @submit="submit">
    <van-field
      name="username"
      label="用户名"
      placeholder="请输入用户名"
      v-model="formData.username"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      type="password"
      name="password"
      label="密码"
      placeholder="请输入密码"
      v-model="formData.password"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <van-field
      type="checkbox"
      name="checkbox"
      label="选中"
      :rules="[{ required: true, message: '请选择' }]"
    >
      <template #input>
        <van-checkbox v-model="formData.radio" shape="round" />
      </template>
    </van-field>
    <van-field>
      <template #input>
        <van-checkbox-group v-model="formData.checkedData" direction="horizontal">
          <van-checkbox name="1" shape="square">选项一</van-checkbox>
          <van-checkbox name="2">选项二</van-checkbox>
          <van-checkbox name="3">选项三</van-checkbox>
        </van-checkbox-group>
      </template>
    </van-field>

    <select v-model="selected">
      <!-- <option disabled value="">Please select one</option> -->
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>

    <h3>form selected: {{ selected }}</h3>

    <div style="margin: 16px">
      <van-button round block type="success" native-type="submit">submit1</van-button>
    </div>
  </van-form>
</template>
<style lang="less" scoped>
select {
  width: 200px;
}
</style>
