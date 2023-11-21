import { DurationUnit } from ".";

test("Duration Unit Convert", function() {
    expect(new DurationUnit(1000, "ms").ms).toBe(1000);
    expect(new DurationUnit(1000, "ms").s).toBe(1);
    expect(new DurationUnit(60000, "ms").min).toBe(1);
    expect(new DurationUnit(3600000, "ms").h).toBe(1);
    expect(new DurationUnit(86400000, "ms").d).toBe(1);
});
