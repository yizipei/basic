<script lang="tsx">
export default {
  setup() {
    const year = ref<number | string>(2025)

    const increment = () => {
      year.value = Number(year.value)
      year.value++
    }

    const domRef = ref<HTMLDivElement>()

    const book: IBook = reactive({
      author: 'jls',
      cover: 'none',
      id: 1,
      price: 123,
      title: 'jls',
    })

    const { cover, title }: { cover: Ref<string>; title: Ref<string> } = toRefs(book)

    onMounted(() => {
      console.log(domRef.value?.className)
    })

    return () => (
      <>
        <van-button type="primary" onClick={increment}>
          {year.value}
        </van-button>
        <div class="jlsadjflk" ref={domRef}>
          123
        </div>
        <van-button
          onClick={() => {
            cover.value = Date.now() + ''
          }}
          type="primary"
        >
          {cover.value}
        </van-button>
      </>
    )
  },
}
</script>
