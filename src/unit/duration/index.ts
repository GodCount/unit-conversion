import Unit from "../unit";

export declare type DurationUnitType = "ms" | "s" | "min" | "h" | "d";

export class DurationUnit extends Unit<DurationUnitType> {

    private minValue: number;

    constructor(rawValue: number, initUnit: DurationUnitType) {
        super(rawValue, initUnit);
        this.minValue = DurationUnit.convert(rawValue, initUnit, "ms");
    }


    public static convert(value: number, source: DurationUnitType, target: DurationUnitType) {
        if (source == target) return value;
        let ms = NaN;
        switch (source) {
            case "ms":
                ms = value;
                break;
            case "s":
                ms = value * 1000;
                break;
            case "min":
                ms = value * 60 * 1000;
                break;
            case "h":
                ms = value * 60 * 60 * 1000;
                break;
            case "d":
                ms = value * 24 * 60 * 60 * 1000;
                break;
        }
        if (isNaN(ms)) throw Error("DurationUnit value cannot be NaN!");
        switch (target) {
            case "ms":
                return ms;
            case "s":
                return ms / 1000;
            case "min":
                return ms / 60 / 1000;
            case "h":
                return ms / 60 / 60 / 1000;
            case "d":
                return ms / 24 / 60 / 60 / 1000;
            default:
                throw Error("No such unit " + target);
        }
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
