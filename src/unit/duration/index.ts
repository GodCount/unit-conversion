import Unit from "../unit";

export declare type DurationUnitType = "ms" | "s" | "min" | "h" | "d";



export class DurationUnit extends Unit<DurationUnitType> {


    static readonly MS_PER_S = 1000;
    static readonly MS_PER_MIN = DurationUnit.MS_PER_S * 60;
    static readonly MS_PER_H = DurationUnit.MS_PER_MIN * 60;
    static readonly MS_PER_D = DurationUnit.MS_PER_H * 24;

    static readonly UNIT_TABLE = {
        "ms": 1,
        "s": DurationUnit.MS_PER_S,
        "min": DurationUnit.MS_PER_MIN,
        "h": DurationUnit.MS_PER_H,
        "d": DurationUnit.MS_PER_D
    }



    private minValue: number;

    constructor(rawValue: number, initUnit: DurationUnitType) {
        super(rawValue, initUnit);
        this.minValue = DurationUnit.convert(rawValue, initUnit, "ms");
    }


    public static convert(value: number, source: DurationUnitType, target: DurationUnitType) {
        if (source == target) return value;
        const ms = value * this.UNIT_TABLE[source];
        if (isNaN(ms)) throw Error("DurationUnit value cannot be NaN!");
        return ms / this.UNIT_TABLE[target];
    }

    /**
     * @returns 毫秒
     */
    get ms() {
        return this.minValue;
    }

    /**
     * @returns 秒
     */
    get s() {
        return DurationUnit.convert(this.minValue, "ms", "s");
    }

    /**
     * @returns 分钟
     */
    get min() {
        return DurationUnit.convert(this.minValue, "ms", "min");
    }

    /**
     * @returns 小时（24时制）
     */
    get h() {
        return DurationUnit.convert(this.minValue, "ms", "h");
    }

    /**
     * @returns 天
     */
    get d() {
        return DurationUnit.convert(this.minValue, "ms", "d");
    }
}
