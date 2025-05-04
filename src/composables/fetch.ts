export function useFetch<T = string>(url: string | Ref<string> | (() => string)) {
  const data = ref<null | T>(null)
  const error = ref(null)

  const fetchData = (url: string | Ref<string> | (() => string)) => {
    getData(toValue(url)).then(
      (res) => {
        data.value = res as T
      },
      (err) => {
        error.value = err
      },
    )
  }

  watchEffect(() => {
    fetchData(url)
  })

  return {
    data,
    error,
  }
}

const getData = (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url)
    }, 1000)
  })
}
