import { ConvertConfig } from "../../config";
import { Unit, UnitValue } from "../unit";

const DurationUnitTuple = ["ms", "s", "min", "h", "d"] as const;

export type DurationUnitType = (typeof DurationUnitTuple)[number];

interface _DurationUnit {
    /**
     * @returns 毫秒
     */
    get ms(): UnitValue;

    /**
     * @returns 秒
     */
    get s(): UnitValue;

    /**
     * @returns 分钟
     */
    get min(): UnitValue;

    /**
     * @returns 小时（24时制）
     */
    get h(): UnitValue;

    /**
     * @returns 天
     */
    get d(): UnitValue;
}

class _DurationUnit extends Unit<DurationUnitType> {
    static readonly UNIT_TABLE = {
        ms: 1 / 1000,
        s: 1,
        min: 60,
        h: 3600,
        d: 86400,
    };

    private readonly UNIT_BEST_TABLE = {
        ms: 1000,
        s: 60,
        min: 60,
        h: 24,
    };

    constructor(rawValue: UnitValue, initUnit: DurationUnitType, config?: Partial<ConvertConfig>) {
        super(DurationUnitTuple, rawValue, initUnit, config);

        for (const unit of DurationUnitTuple) {
            Object.defineProperty(this, unit, {
                get: () => {
                    return DurationUnit.convert(this.rawValue, this.initUnit, unit);
                },
                enumerable: true,
                configurable: false,
            });
        }
    }

    get best(): string {
        for (const unit of DurationUnitTuple) {
            const result = this[unit];
            const maxValue = this.UNIT_BEST_TABLE[unit];
            if (!maxValue || result <= maxValue) return this.outputBest(result, unit);
        }
        return this.outputBest(this.rawValue, this.initUnit);
    }

    public static convert(value: UnitValue, source: DurationUnitType, target: DurationUnitType) {
        return this.simpleConvert(value, this.UNIT_TABLE[source], this.UNIT_TABLE[target]);
    }
}

export type DurationUnit = _DurationUnit;
export const DurationUnit = _DurationUnit;
