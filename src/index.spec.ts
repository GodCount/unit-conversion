import ".";

describe("prototype tests", function () {
    it("Number.toDuration", function () {
        expect((1000).toDuration("ms").ms).toBe(1000);
        expect((1000).toDuration("ms").s).toBe(1);
        expect((60000).toDuration("ms").min).toBe(1);
        expect((3600000).toDuration("ms").h).toBe(1);
        expect((86400000).toDuration("ms").d).toBe(1);
    });

    it("Number.toStorage", function () {
        expect((8).toStorage("bit").bit).toBe(8);
        expect((8).toStorage("bit").byte).toBe(1);
        expect((8192).toStorage("bit").kb).toBe(1);
        expect((1024).toStorage("kb").mb).toBe(1);
        expect((1048576).toStorage("kb").gb).toBe(1);
        expect((1073741824).toStorage("kb").tb).toBe(1);
        expect((1099511627776).toStorage("kb").pb).toBe(1);
    });
});