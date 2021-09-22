import { ArgumentNotEnoughError, ArgumentTypeInValidError } from '../../error'
import { mathFn } from '../types'

const add:mathFn = (n1: number, n2:number) => {
  if ([n1, n2].some(arg => typeof arg === 'undefined')) {
    throw new ArgumentNotEnoughError('[add]: 두개의 number 타입 인자를 입력해야 합니다.')
  }
  if ([n1, n2].some(arg => typeof arg !== 'number')) {
    throw new ArgumentTypeInValidError('[add]: (a: number, b:number) 형태의 인자를 입력해야 합니다.')
  }
  return n1 + n2
}

export default add
