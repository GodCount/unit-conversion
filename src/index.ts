export * from "./unit/duration";
export * from "./unit/storage";
import { DurationUnit, DurationUnitType } from "./unit/duration";
import { StorageUnit, StorageUnitType } from "./unit/storage";



declare global {
    interface Number {
        toDuration: (source: DurationUnitType) => DurationUnit;
        toStorage: (source: StorageUnitType) => StorageUnit;
    }
}


Number.prototype.toDuration = function (source: DurationUnitType) {
    return new DurationUnit(this.valueOf(), source);
}

Number.prototype.toStorage = function (source: StorageUnitType) {
    return new StorageUnit(this.valueOf(), source);
}

