import { mathFn } from './types'

export const sum:mathFn = (a: number, b:number) => {
  return a + b
}

export const sub:mathFn = (a: number, b: number) => {
  return a - b
}

export const div:mathFn = (a: number, b: number) => {
  if (b === 0) throw new Error('Division By Zero')
  return a / b
}

export const mul:mathFn = (a: number, b: number) => {
  return a * b
}

export default {
  sum,
  sub,
  div,
  mul
}
