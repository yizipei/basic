const useClickOutside = (elRef: Ref<HTMLElement | null>, callback: () => void) => {
  const handleClick = (e: MouseEvent) => {
    if (elRef.value && !elRef.value.contains(e.target as HTMLElement)) {
      console.log('click outside')

      callback()
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClick)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleClick)
  })
}

export default useClickOutside
