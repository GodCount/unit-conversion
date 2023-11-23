import Unit from "../unit";

export declare type DurationUnitType = "ms" | "s" | "min" | "h" | "d";

const MS_PER_S = 1000;
const S_PER_MIN = MS_PER_S * 60;
const MIN_PER_H = S_PER_MIN * 60;
const H_PER_D = MIN_PER_H * 24;

const UNIT_TABLE = {
    "ms": 1,
    "s": MS_PER_S,
    "min": S_PER_MIN,
    "h": MIN_PER_H,
    "d": H_PER_D
}


export class DurationUnit extends Unit<DurationUnitType> {

    private minValue: number;

    constructor(rawValue: number, initUnit: DurationUnitType) {
        super(rawValue, initUnit);
        this.minValue = DurationUnit.convert(rawValue, initUnit, "ms");
    }


    public static convert(value: number, source: DurationUnitType, target: DurationUnitType) {
        if (source == target) return value;
        const ms = value * UNIT_TABLE[source];
        if (isNaN(ms)) throw Error("DurationUnit value cannot be NaN!");
        return ms / UNIT_TABLE[target];
    }

    get ms() {
        return this.minValue;
    }

    get s() {
        return DurationUnit.convert(this.minValue, "ms", "s");
    }

    get min() {
        return DurationUnit.convert(this.minValue, "ms", "min");
    }

    get h() {
        return DurationUnit.convert(this.minValue, "ms", "h");
    }

    get d() {
        return DurationUnit.convert(this.minValue, "ms", "d");
    }
}
