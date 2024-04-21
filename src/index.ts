export { DurationUnit } from "./unit/duration";
export { StorageUnit } from "./unit/storage";
export { LengthUnit } from "./unit/length";
export { setConvertGlobalConfig, resetConvertGlobalConfig } from "./config";
import { DurationUnit, DurationUnitType } from "./unit/duration";
import { StorageUnit, StorageUnitType } from "./unit/storage";
import { LengthUnit, LengthUnitType } from "./unit/length";
import { ConvertConfig } from "./config";

declare global {
    interface Number {
        toDuration: (source: DurationUnitType, config?: Partial<ConvertConfig>) => DurationUnit;
        toStorage: (source: StorageUnitType, config?: Partial<ConvertConfig>) => StorageUnit;
        toLength: (source: LengthUnitType, config?: Partial<ConvertConfig>) => LengthUnit;
    }
}

Number.prototype.toDuration = function (source: DurationUnitType, config?: Partial<ConvertConfig>) {
    return new DurationUnit(this.valueOf(), source, config);
};

Number.prototype.toStorage = function (source: StorageUnitType, config?: Partial<ConvertConfig>) {
    return new StorageUnit(this.valueOf(), source, config);
};

Number.prototype.toLength = function (source: LengthUnitType, config?: Partial<ConvertConfig>) {
    return new LengthUnit(this.valueOf(), source, config);
};
