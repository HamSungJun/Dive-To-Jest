import { CustomError } from '..'

export class ZeroDivisionError extends CustomError {
  constructor (message = '0으로 나눌 수 없습니다.') {
    super(message)
  }
}
