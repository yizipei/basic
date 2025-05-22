<script setup lang="ts">
import { createPopper, placements, type Instance } from '@popperjs/core'
import type { TooltipProps } from './types'

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover',
  openDelay: 0,
  closeDelay: 0,
})
const emits = defineEmits<{
  visibleChange: [visible: boolean]
}>()

const containerNode = useTemplateRef<HTMLElement>('containerNode')
const triggerNode = useTemplateRef<HTMLElement>('triggerNode')
const popperNode = useTemplateRef<HTMLElement>('popperNode')
const instance = ref<Instance>()

const visible = ref(false)

useClickOutside(containerNode, () => {
  if (props.trigger === 'click' && visible.value) {
    visible.value = false
  }
})

let events = reactive<Record<string, any>>({})
let outerEvents = reactive<Record<string, any>>({})
const attachEvents = () => {
  removeEvents()
  if (props.trigger === 'hover') {
    events.mouseenter = (e: MouseEvent) => {
      openPopper()
    }
    outerEvents.mouseleave = (e: MouseEvent) => {
      closePopper()
    }
  } else if (props.trigger === 'click') {
    events.click = (e: MouseEvent) => {
      togglePopper()
    }
  }
}
const removeEvents = () => {
  // events 恢复初始值
  events = {}
  outerEvents = {}
}
const openPopperDebounce = debounce(
  () => {
    visible.value = true
    emits('visibleChange', visible.value)
  },
  props.openDelay,
  {
    edges: ['trailing'],
  },
)
const closePopperDebounce = debounce(
  () => {
    visible.value = false
    emits('visibleChange', visible.value)
  },
  props.closeDelay,
  {
    edges: ['trailing'],
  },
)
const openPopper = () => {
  closePopperDebounce.cancel()
  openPopperDebounce()
}
const closePopper = () => {
  openPopperDebounce.cancel()
  closePopperDebounce()
}
const togglePopper = () => {
  visible.value = !visible.value
  emits('visibleChange', visible.value)
}

// 处理 原生 options
const options = computed(() => {
  return { placement: props.placement, ...props.options }
})

watch(
  () => props.trigger,
  () => {
    if (props.trigger === 'manual') {
      removeEvents()
      return
    }
    attachEvents()
  },
  { immediate: true, flush: 'post' },
)
watchEffect(() => {
  if (visible.value) {
    if (triggerNode.value && popperNode.value) {
      instance.value = createPopper(triggerNode.value, popperNode.value, {
        // modifiers: [
        //   {
        //     name: 'arrow',
        //     options: {
        //       element: document.querySelector('#arrow'),
        //     },
        //   },
        // ],
        ...options.value,
      })
    }
  } else {
    // 延期删除 防止删除实例后 动画bug
    setTimeout(() => {
      instance.value?.destroy()
    }, 1000)
  }
})

onMounted(() => {})
onUnmounted(() => {
  removeEvents()
  instance.value?.destroy()
})
defineExpose({
  instance,
  openPopper,
  closePopper,
})
</script>

<template>
  <div ref="containerNode" class="yi-tooltip" v-on="outerEvents">
    <div ref="triggerNode" class="yi-tooltip__trigger" v-on="events">
      <slot></slot>
    </div>
    <Transition :name="props.transition">
      <div v-if="visible" ref="popperNode" class="yi-tooltip__popper">
        <slot name="content">tooltip</slot>
        <div class="arrow" data-popper-arrow></div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.yi-tooltip__trigger {
  display: inline-block;
}
.yi-tooltip__popper {
  border: var(--yi-border);
  background-color: aqua;
  padding: 8px 10px;

  .arrow,
  .arrow::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: inherit;
  }

  .arrow {
    visibility: hidden;
  }

  .arrow::before {
    visibility: visible;
    content: '';
    transform: rotate(45deg);
  }

  &[data-popper-placement^='top'] > .arrow {
    bottom: -4px;
  }

  &[data-popper-placement^='bottom'] > .arrow {
    top: -4px;
  }

  &[data-popper-placement^='left'] > .arrow {
    right: -4px;
  }

  &[data-popper-placement^='right'] > .arrow {
    left: -4px;
  }
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(-10px);
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
</style>
