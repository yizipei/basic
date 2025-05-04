declare module 'vue' {
  interface ComponentCustomProperties {
    $pxToVw: (value?: string | number, designWidth?: number) => string
  }
}
export {}
