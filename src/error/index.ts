/* eslint-disable no-useless-constructor */
export class CustomError extends Error {
  constructor (message: string) {
    super(message)
    Object.setPrototypeOf(this, CustomError.prototype)
  }
}

export class ArgumentNotEnoughError extends CustomError {
  constructor (message = '') {
    super(message)
    Object.setPrototypeOf(this, ArgumentNotEnoughError.prototype)
  }
}

export class ArgumentTypeInValidError extends CustomError {
  constructor (message = '') {
    super(message)
    Object.setPrototypeOf(this, ArgumentTypeInValidError.prototype)
  }
}
