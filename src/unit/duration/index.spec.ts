import { DurationUnit } from ".";

describe("Duration Unit", () => {
    it("Convert", function () {
        expect(new DurationUnit(1000, "ms").ms).toBe(1000);
        expect(new DurationUnit(1000, "ms").s).toBe(1);
        expect(new DurationUnit(60000, "ms").min).toBe(1);
        expect(new DurationUnit(3600000, "ms").h).toBe(1);
        expect(new DurationUnit(86400000, "ms").d).toBe(1);
    });

    it("to Best", () => {
        expect(new DurationUnit(86400001, "ms").best).toBe("1d");
        expect(new DurationUnit(86400000, "d").best).toBe("86400000d");
        expect(new DurationUnit(864000, "s").best).toBe("10d");
        expect(new DurationUnit(25, "h").best).toBe("1.04d");
        expect(new DurationUnit(1, "ms").best).toBe("1ms");
    });

    it("Unit type Throw", () => {
        expect(() => new DurationUnit(0, "ms")).not.toThrow();
        expect(() => new DurationUnit(0, "s")).not.toThrow();
        expect(() => new DurationUnit(0, "min")).not.toThrow();
        expect(() => new DurationUnit(0, "h")).not.toThrow();
        expect(() => new DurationUnit(0, "d")).not.toThrow();
        expect(() => new DurationUnit(0, "aa" as any)).toThrow(
            /unit aa not is support.+/,
        );
    });
});
