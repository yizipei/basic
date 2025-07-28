let a: { qq: string; ww: number } = { qq: '123', ww: 123 }
let b: { qq: string } = { qq: '234' }

// a = b

b = a
// console.log(b.ww);

type A = {
  qq: string
  ww: number
}
type B<T> = {
  [K in keyof T]: T[K]
}
type C = B<A>

type D = Readonly<A>

type E = keyof any

type F<T> = T extends Array<infer U> ? U : T
type G = F<string | number[]>
type H = F<number>

class Demo {
  name!: string
  age: number = 18
  // 性别
  sex: 'male' | 'female'

  constructor(sex: 'male' | 'female') {
    this.sex = sex
  }
}

interface IClass {
  name: string
  age: number
  sex: 'male' | 'female'
  talk: (text: string) => string
}

class Demo2 implements IClass {
  talk: (text: string) => string = (text: string) => text
  name!: string
  age!: number
  sex!: 'male' | 'female'
}
