import ".";
import { setConvertGlobalConfig } from ".";

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

    it("Number.toLength", function () {
        expect((1).toLength("pm").pm).toBe(1);
        expect((1000).toLength("pm").nm).toBe(1);
        expect((1000000).toLength("pm").um).toBe(1);
        expect((1000000000).toLength("pm").mm).toBe(1);
        expect((10).toLength("mm").cm).toBe(1);
        expect((100).toLength("mm").dm).toBe(1);
        expect((1000).toLength("mm").m).toBe(1);
        expect((1000000).toLength("mm").km).toBe(1);

        expect(Math.round((0.1).toLength("mm").hao)).toBe(3);
        expect(Math.round((1).toLength("mm").lii)).toBe(3);
        expect(Math.round((10).toLength("mm").fen)).toBe(3);
        expect(Math.round((100).toLength("mm").cun)).toBe(3);
        expect(Math.round((1000).toLength("mm").chi)).toBe(3);
        expect(Math.round((10000).toLength("mm").zhang)).toBe(3);
        expect(Math.round((1500000).toLength("mm").li)).toBe(3);
        expect(Math.round((3000000).toLength("mm").gongli)).toBe(3);

        expect((25.4).toLength("mm").in).toBe(1);
        expect((304.8).toLength("mm").ft).toBe(1);
        expect((914.4).toLength("mm").yd).toBe(1);
        expect((1828.8).toLength("mm").ftm).toBe(1);
        expect((201168).toLength("mm").fur).toBe(1);
        expect((1609344).toLength("mm").mi).toBe(1);
    });

    it("Convert Config", function () {
        setConvertGlobalConfig({
            bestFractionDigits: 6,
        });
        expect((100).toLength("in").best).toBe("1.388889ftm");
        expect((100).toLength("in", { bestFractionDigits: 1 }).best).toBe(
            "1.4ftm",
        );
        expect((100).toLength("in", { bestCenterSpace: true }).best).toBe(
            "1.388889 ftm",
        );
        expect((100).toLength("in", { bestUnitUpper: true }).best).toBe(
            "1.388889FTM",
        );
    });
});
