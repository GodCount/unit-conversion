import { StorageUnit } from ".";

describe("Storage Unit", () => {
    it("Convert", () => {
        expect(new StorageUnit(8, "bit").bit).toBe(8);
        expect(new StorageUnit(8, "bit").byte).toBe(1);
        expect(new StorageUnit(8192, "bit").kb).toBe(1);
        expect(new StorageUnit(1024, "kb").mb).toBe(1);
        expect(new StorageUnit(1048576, "kb").gb).toBe(1);
        expect(new StorageUnit(1073741824, "kb").tb).toBe(1);
        expect(new StorageUnit(1099511627776, "kb").pb).toBe(1);
    });

    it("to Best", () => {
        expect(new StorageUnit(8, "bit").best).toBe("1byte");
        expect(new StorageUnit(1024, "mb").best).toBe("1gb");
        expect(new StorageUnit(1, "gb").best).toBe("1gb");
    });

    it("Unit type Throw", () => {
        expect(() => new StorageUnit(0, "bit")).not.toThrow();
        expect(() => new StorageUnit(0, "byte")).not.toThrow();
        expect(() => new StorageUnit(0, "kb")).not.toThrow();
        expect(() => new StorageUnit(0, "mb")).not.toThrow();
        expect(() => new StorageUnit(0, "gb")).not.toThrow();
        expect(() => new StorageUnit(0, "tb")).not.toThrow();
        expect(() => new StorageUnit(0, "pb")).not.toThrow();
        expect(() => new StorageUnit(0, "aa" as any)).toThrow(
            /unit aa not is support.+/,
        );
    });
});
