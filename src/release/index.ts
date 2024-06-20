import components from './components'
export * from './components'

class Register {
  constructor() {
    Object.values(components).forEach((register) => new register())
  }
}

export default Register
