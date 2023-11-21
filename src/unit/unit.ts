

export default class Unit<T>  {
    constructor(public readonly rawValue: number, public readonly initUnit: T) { }
}
