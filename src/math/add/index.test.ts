import { ArgumentNotEnoughError, ArgumentTypeInValidError } from '../../error'
import add from '.'

describe('[add] 함수 테스트', () => {
  test.each([
    [-1, 0, -1],
    [-1, -1, -2],
    [-1, -2, -3],
    [0, 0, 0],
    [1, 1, 2],
    [1, 2, 3]
  ])('정수형 number 연산 테스트 : add(%p, %p) returns %p', (n1, n2, expected) => {
    expect(add(n1, n2)).toBe(expected)
  })

  test.each([
    [1.5, 1.5, 3.0],
    [1.5, 2.0, 3.5]
  ])('실수형 number 연산 테스트 : add(%p, %p) returns %p', (n1, n2, expected) => {
    expect(add(n1, n2)).toEqual(expected)
  })

  test.each([
    [undefined, undefined, ArgumentNotEnoughError.name],
    [1, undefined, ArgumentNotEnoughError.name],
    [undefined, 1, ArgumentNotEnoughError.name]
  ])('불충분한 인자 입력 테스트 : add(%p, %p) returns %p', (n1, n2, expected) => {
    expect(() => { add(n1 as unknown as number, n2 as unknown as number) }).toThrowError(ArgumentNotEnoughError)
  })

  test.each([
    [null, null, ArgumentTypeInValidError.name],
    ['1', '1', ArgumentTypeInValidError.name],
    [{}, [], ArgumentTypeInValidError.name]
  ])('잘못된 인자 타입 입력 테스트 : add(%p, %p) returns %p', (n1, n2, expected) => {
    expect(() => { add(n1 as unknown as number, n2 as unknown as number) }).toThrowError(ArgumentTypeInValidError)
  })
})
