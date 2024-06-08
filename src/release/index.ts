import components from './components'
export * from './components'

export default class {
  constructor() {
    Object.values(components).forEach((register) => new register())
  }
}
