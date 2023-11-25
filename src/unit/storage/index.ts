import Unit from "../unit";


export declare type StorageUnitType = "bit" | "byte" | "kb" | "mb" | "gb" | "tb" | "pb";


export class StorageUnit extends Unit<StorageUnitType> {

    static readonly BIT_PER_BYTE = 8;
    static readonly BIT_PER_KB = StorageUnit.BIT_PER_BYTE * 1024;
    static readonly BIT_PER_MB = StorageUnit.BIT_PER_KB * 1024;
    static readonly BIT_PER_GB = StorageUnit.BIT_PER_MB * 1024;
    static readonly BIT_PER_TB = StorageUnit.BIT_PER_GB * 1024;
    static readonly BIT_PER_PB = StorageUnit.BIT_PER_TB * 1024;

    static readonly UNIT_TABLE = {
        "bit": 1,
        "byte": StorageUnit.BIT_PER_BYTE,
        "kb": StorageUnit.BIT_PER_KB,
        "mb": StorageUnit.BIT_PER_MB,
        "gb": StorageUnit.BIT_PER_GB,
        "tb": StorageUnit.BIT_PER_TB,
        "pb": StorageUnit.BIT_PER_PB
    };

    private minValue: number;

    constructor(rawValue: number, initUnit: StorageUnitType) {
        super(rawValue, initUnit);
        this.minValue = StorageUnit.convert(rawValue, initUnit, "bit");
    }


    public static convert(value: number, source: StorageUnitType, target: StorageUnitType) {
        if (source == target) return value;
        const bit = value * this.UNIT_TABLE[source];
        if (isNaN(bit)) throw Error("StorageUnit value cannot be NaN!");
        return bit / this.UNIT_TABLE[target];
    }

    /**
     * @returns 位
     */
    get bit() {
        return this.minValue;
    }

    /**
     * @returns 字节
     */
    get byte() {
        return StorageUnit.convert(this.minValue, "bit", "byte");
    }

    /**
     * @returns 千字节
     */
    get kb() {
        return StorageUnit.convert(this.minValue, "bit", "kb");
    }

    /**
     * @returns 兆字节
     */
    get mb() {
        return StorageUnit.convert(this.minValue, "bit", "mb");
    }

    /**
     * @returns 吉字节
     */
    get gb() {
        return StorageUnit.convert(this.minValue, "bit", "gb");
    }

    /**
     * @returns 太字节
     */
    get tb() {
        return StorageUnit.convert(this.minValue, "bit", "tb");
    }

    /**
     * @returns 拍字节
     */
    get pb() {
        return StorageUnit.convert(this.minValue, "bit", "pb");
    }

}
