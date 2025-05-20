declare module 'vue' {
  interface ComponentCustomProperties {
    $pxToVw: (value?: string | number, designWidth?: number) => string
  }
}
declare module 'postcss-each'
export {}
