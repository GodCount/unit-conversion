import { ConvertConfig } from "../../config";
import { Unit, UnitValue } from "../unit";

const MetricLengthUnitTuple = [
    "pm",
    "nm",
    "um",
    "mm",
    "cm",
    "dm",
    "m",
    "km",
] as const;
const ChineseLengthUnitTuple = [
    "hao",
    "lii",
    "fen",
    "cun",
    "chi",
    "zhang",
    "li",
    "gongli",
] as const;
const BritishLengthUnitTuple = ["in", "ft", "yd", "ftm", "fur", "mi"] as const;
const LengthUnitTuple = [
    ...MetricLengthUnitTuple,
    ...ChineseLengthUnitTuple,
    ...BritishLengthUnitTuple,
] as const;

export type MetricLengthUnitType = (typeof MetricLengthUnitTuple)[number];

export type ChineseLengthUnitType = (typeof ChineseLengthUnitTuple)[number];

export type BritishLengthUnitType = (typeof BritishLengthUnitTuple)[number];

export type LengthUnitType =
    | MetricLengthUnitType
    | ChineseLengthUnitType
    | BritishLengthUnitType;

interface _LengthUnit {
    /**
     * @returns 皮米
     */
    get pm(): UnitValue;

    /**
     * @returns 纳米
     */
    get nm(): UnitValue;

    /**
     * @returns 微米
     */
    get um(): UnitValue;

    /**
     * @returns 毫米
     */
    get mm(): UnitValue;

    /**
     * @returns 厘米
     */
    get cm(): UnitValue;

    /**
     * @returns 分米
     */
    get dm(): UnitValue;

    /**
     * @returns 米
     */
    get m(): UnitValue;

    /**
     * @returns 千米
     */
    get km(): UnitValue;

    /**
     * @returns 毫
     */
    get hao(): UnitValue;

    /**
     * @returns 厘
     */
    get lii(): UnitValue;

    /**
     * @returns 分
     */
    get fen(): UnitValue;

    /**
     * @returns 寸
     */
    get cun(): UnitValue;

    /**
     * @returns 尺
     */
    get chi(): UnitValue;

    /**
     * @returns 丈
     */
    get zhang(): UnitValue;

    /**
     * @returns 里
     */
    get li(): UnitValue;

    /**
     * @returns 公里
     */
    get gongli(): UnitValue;

    /**
     * @returns 英寸
     */
    get in(): UnitValue;

    /**
     * @returns 英尺
     */
    get ft(): UnitValue;

    /**
     * @returns 码
     */
    get yd(): UnitValue;

    /**
     * @returns 英寻
     */
    get ftm(): UnitValue;

    /**
     * @returns 弗隆
     */
    get fur(): UnitValue;

    /**
     * @returns 英里
     */
    get mi(): UnitValue;
}

class _LengthUnit extends Unit<LengthUnitType> {
    static readonly MetricLengthUnitTuple = MetricLengthUnitTuple;
    static readonly ChineseLengthUnitTuple = ChineseLengthUnitTuple;
    static readonly BritishLengthUnitTuple = BritishLengthUnitTuple;

    static readonly METRIC_UNIT_TABLE = {
        pm: 1 / 10 / 1000 / 1000 / 1000,
        nm: 1 / 10 / 1000 / 1000,
        um: 1 / 10 / 1000,
        mm: 1 / 10,
        cm: 1,
        dm: 10,
        m: 100,
        km: 100000,
    };

    static readonly CHINESE_UNIT_TABLE = {
        hao: 1 / 0.3 / 10 / 10 / 10,
        lii: 1 / 0.3 / 10 / 10,
        fen: 1 / 0.3 / 10,
        cun: 1 / 0.3,
        chi: (1 / 0.3) * 10,
        zhang: (1 / 0.3) * 10 * 10,
        li: 50000,
        gongli: 100000,
    };

    static readonly BRITISH_UNIT_TABLE = {
        in: 30.48 / 12,
        ft: 30.48,
        yd: 30.48 * 3,
        ftm: 30.48 * 6,
        fur: 20116.8,
        mi: 30.48 * 5280,
    };

    static readonly UNIT_TABLE = {
        ...this.METRIC_UNIT_TABLE,
        ...this.CHINESE_UNIT_TABLE,
        ...this.BRITISH_UNIT_TABLE,
    };

    private readonly UNIT_BEST_TABLE = {
        // 公制
        pm: 1000,
        nm: 1000,
        um: 1000,
        mm: 10,
        cm: 10,
        dm: 10,
        m: 1000,
        // 市制
        hao: 10,
        lii: 10,
        fen: 10,
        cun: 10,
        chi: 10,
        zhang: 150,
        li: 1000,
        // 英制
        in: 12,
        ft: 3,
        yd: 2,
        ftm: 110,
        fur: 8,
    };

    constructor(
        rawValue: UnitValue,
        initUnit: LengthUnitType,
        config?: Partial<ConvertConfig>,
    ) {
        super(LengthUnitTuple, rawValue, initUnit, config);
        for (const unit of LengthUnitTuple) {
            Object.defineProperty(this, unit, {
                get: () => {
                    return LengthUnit.convert(
                        this.rawValue,
                        this.initUnit,
                        unit,
                    );
                },
                enumerable: true,
                configurable: false,
            });
        }
    }

    get best(): string {
        const unitTuple = ChineseLengthUnitTuple.includes(this.initUnit as any)
            ? ChineseLengthUnitTuple
            : BritishLengthUnitTuple.includes(this.initUnit as any)
              ? BritishLengthUnitTuple
              : MetricLengthUnitTuple;

        for (const unit of unitTuple) {
            const result = this[unit];
            const maxValue = this.UNIT_BEST_TABLE[unit as never];
            if (!maxValue || result < maxValue)
                return this.outputBest(result, unit);
        }
        return this.outputBest(this.rawValue, this.initUnit);
    }

    public static convert(
        value: UnitValue,
        source: LengthUnitType,
        target: LengthUnitType,
    ) {
        return this.simpleConvert(
            value,
            this.UNIT_TABLE[source],
            this.UNIT_TABLE[target],
        );
    }
}

export type LengthUnit = _LengthUnit;
export const LengthUnit = _LengthUnit;
