export * from "./unit/duration";
export * from "./unit/storage";
export * from "./unit/length";
import { DurationUnit, DurationUnitType } from "./unit/duration";
import { StorageUnit, StorageUnitType } from "./unit/storage";
import { LengthUnit, LengthUnitType } from "./unit/length";




declare global {
    interface Number {
        toDuration: (source: DurationUnitType) => DurationUnit;
        toStorage: (source: StorageUnitType) => StorageUnit;
        toLength: (source: LengthUnitType) => LengthUnit
    }
}


Number.prototype.toDuration = function (source: DurationUnitType) {
    return new DurationUnit(this.valueOf(), source);
}

Number.prototype.toStorage = function (source: StorageUnitType) {
    return new StorageUnit(this.valueOf(), source);
}

Number.prototype.toLength = function (source: LengthUnitType) {
    return new LengthUnit(this.valueOf(), source);
}
