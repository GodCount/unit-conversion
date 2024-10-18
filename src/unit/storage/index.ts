import { ConvertConfig } from "../../config";
import { Unit, UnitValue } from "../unit";

const StorageUnitTuple = ["bit", "byte", "kb", "mb", "gb", "tb", "pb"] as const;

export type StorageUnitType = (typeof StorageUnitTuple)[number];

interface _StorageUnit {
    /**
     * @returns 位
     */
    get bit(): UnitValue;

    /**
     * @returns 字节
     */
    get byte(): UnitValue;

    /**
     * @returns 千字节
     */
    get kb(): UnitValue;

    /**
     * @returns 兆字节
     */
    get mb(): UnitValue;

    /**
     * @returns 吉字节
     */
    get gb(): UnitValue;

    /**
     * @returns 太字节
     */
    get tb(): UnitValue;

    /**
     * @returns 拍字节
     */
    get pb(): UnitValue;
}

class _StorageUnit extends Unit<StorageUnitType> {
    private static readonly UNIT_TABLE = {
        bit: 0.125,
        byte: 1,
        kb: 1024,
        mb: 1024 * 1024,
        gb: 1024 * 1024 * 1024,
        tb: 1024 * 1024 * 1024 * 1024,
        pb: 1024 * 1024 * 1024 * 1024 * 1024,
    };

    private readonly UNIT_BEST_TABLE = {
        bit: 8,
        byte: 1024,
        kb: 1024,
        mb: 1024,
        gb: 1024,
        tb: 1024,
    };

    constructor(
        rawValue: UnitValue,
        initUnit: StorageUnitType,
        config?: Partial<ConvertConfig>,
    ) {
        super(StorageUnitTuple, rawValue, initUnit, config);
        for (const unit of StorageUnitTuple) {
            Object.defineProperty(this, unit, {
                get: () => {
                    return StorageUnit.convert(
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
        for (const unit of StorageUnitTuple) {
            const result = this[unit];
            const maxValue = this.UNIT_BEST_TABLE[unit as never];
            if (!maxValue || result < maxValue)
                return this.outputBest(result, unit);
        }
        return this.outputBest(this.rawValue, this.initUnit);
    }

    public static convert(
        value: UnitValue,
        source: StorageUnitType,
        target: StorageUnitType,
    ) {
        return this.simpleConvert(
            value,
            this.UNIT_TABLE[source],
            this.UNIT_TABLE[target],
        );
    }
}

export type StorageUnit = _StorageUnit;
export const StorageUnit = _StorageUnit;
