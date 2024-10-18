import { ConvertConfig, getConvertGlobalConfig } from "../config";

export type UnitValue = number;
export class Unit<T extends string> {
    public config = getConvertGlobalConfig();

    constructor(
        public readonly UnitTuple: readonly T[],
        public readonly rawValue: UnitValue,
        public readonly initUnit: T,
        config?: Partial<ConvertConfig>,
    ) {
        if (!UnitTuple.includes(initUnit))
            throw new TypeError(
                `unit ${initUnit} not is support, support list ${this.UnitTuple}`,
            );
        if (config)
            this.config = {
                ...this.config,
                ...config,
            };
    }

    protected retainDecimals(value: number, digit: number) {
        return Math.round(value * Math.pow(10, digit)) / Math.pow(10, digit);
    }

    protected outputBest(value: number, unit: T) {
        value = this.retainDecimals(value, this.config.bestFractionDigits);
        return `${value}${this.config.bestCenterSpace ? " " : ""}${this.config.bestUnitUpper ? unit.toUpperCase() : unit}`;
    }

    get best(): string {
        return this.outputBest(this.rawValue, this.initUnit);
    }

    protected static simpleConvert(
        value: UnitValue,
        source: number,
        target: number,
    ): UnitValue {
        if (source == target) return value;
        return value * (source / target);
    }
}
