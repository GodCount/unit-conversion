import Unit from "../unit";


export declare type StorageUnitType = "bit" | "byte" | "kb" | "mb" | "gb" | "tb" | "pb";

export class StorageUnit extends Unit<StorageUnitType> {

    private minValue: number;

    constructor(rawValue: number, initUnit: StorageUnitType) {
        super(rawValue, initUnit);
        this.minValue = StorageUnit.convert(rawValue, initUnit, "bit");
    }


    public static convert(value: number, source: StorageUnitType, target: StorageUnitType) {
        if (source == target) return value;
        let bit = NaN;
        switch (source) {
            case "bit":
                bit = value;
                break;
            case "byte":
                bit = value * 8;
                break;
            case "kb":
                bit = value * 1024 * 8;
                break;
            case "mb":
                bit = value * 1024 * 1024 * 8;
                break;
            case "gb":
                bit = value * 1024 * 1024 * 1024 * 8;
                break;
            case "tb":
                bit = value * 1024 * 1024 * 1024 * 1024 * 8;
                break;
            case "pb":
                bit = value * 1024 * 1024 * 1024 * 1024 * 1024 * 8;
                break;
        }
        if (isNaN(bit)) throw Error("StorageUnit value cannot be NaN!");
        switch (target) {
            case "bit":
                return bit;
            case "byte":
                return bit / 8;
            case "kb":
                return bit / 1024 / 8;
            case "mb":
                return bit / 1024 / 1024 / 8;
            case "gb":
                return bit / 1024 / 1024 / 1024 / 8;
            case "tb":
                return bit / 1024 / 1024 / 1024 / 1024 / 8;
            case "pb":
                return bit / 1024 / 1024 / 1024 / 1024 / 1024 / 8;
            default:
                throw Error("No such unit " + target);
        }
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
