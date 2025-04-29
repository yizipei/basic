<script lang="tsx">
import { ref } from 'vue'

export default {
  setup() {
    const txt = ref('123')
    const demoHtml = ref('<div style="color:red;">234</div>')
    const id: string = Math.random().toString()

    const objectAttrs = {
      class: 'demo',
      id: '123',
    }

    const className = 'qq'
    const classValue = 'ww'
    const clickFn = (event: Event) => {
      event.preventDefault()
      console.log('clickFn')
    }

    return () => (
      <div>
        {txt.value}
        <div v-html={demoHtml.value}></div>
        <div id={id}>{id}</div>
        <div {...objectAttrs}>attrs{objectAttrs}</div>
        <van-button type="primary">{Date.now()}</van-button>
        <van-button
          {...{ [className]: [classValue] }}
          onClick={clickFn}
          type="danger"
          style="color:blue;"
        >
          danger
        </van-button>
      </div>
    )
  },
}
</script>
