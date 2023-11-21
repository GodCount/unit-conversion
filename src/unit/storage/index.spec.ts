import { StorageUnit } from ".";

test("Storage Unit Convert", function() {
    expect(new StorageUnit(8, "bit").bit).toBe(8);
    expect(new StorageUnit(8, "bit").byte).toBe(1);
    expect(new StorageUnit(8192, "bit").kb).toBe(1);
    expect(new StorageUnit(1024, "kb").mb).toBe(1);
    expect(new StorageUnit(1048576, "kb").gb).toBe(1);
    expect(new StorageUnit(1073741824, "kb").tb).toBe(1);
    expect(new StorageUnit(1099511627776, "kb").pb).toBe(1);
});
