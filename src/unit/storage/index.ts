import Unit from "../unit";


export declare type StorageUnitType = "bit" | "byte" | "kb" | "mb" | "gb" | "tb" | "pb";

const BIT_PER_BYTE = 8;
const BYTE_PER_KB = BIT_PER_BYTE * 1024;
const KB_PER_MB = BYTE_PER_KB * 1024;
const MB_PER_GB = KB_PER_MB * 1024;
const GB_PER_TB = MB_PER_GB * 1024;
const TB_PER_PB = GB_PER_TB * 1024;

const UNIT_TABLE = {
    "bit": 1,
    "byte": BIT_PER_BYTE,
    "kb": BYTE_PER_KB,
    "mb": KB_PER_MB,
    "gb": MB_PER_GB,
    "tb": GB_PER_TB,
    "pb": TB_PER_PB
};


export class StorageUnit extends Unit<StorageUnitType> {

    private minValue: number;

    constructor(rawValue: number, initUnit: StorageUnitType) {
        super(rawValue, initUnit);
        this.minValue = StorageUnit.convert(rawValue, initUnit, "bit");
    }


    public static convert(value: number, source: StorageUnitType, target: StorageUnitType) {
        if (source == target) return value;
        const bit = value * UNIT_TABLE[source];
        if (isNaN(bit)) throw Error("StorageUnit value cannot be NaN!");
        return bit / UNIT_TABLE[target];
    }

    get bit() {
        return this.minValue;
    }

    get byte() {
        return StorageUnit.convert(this.minValue, "bit", "byte");
    }

    get kb() {
        return StorageUnit.convert(this.minValue, "bit", "kb");
    }

    get mb() {
        return StorageUnit.convert(this.minValue, "bit", "mb");
    }

    get gb() {
        return StorageUnit.convert(this.minValue, "bit", "gb");
    }

    get tb() {
        return StorageUnit.convert(this.minValue, "bit", "tb");
    }

    get pb() {
        return StorageUnit.convert(this.minValue, "bit", "pb");
    }

}
