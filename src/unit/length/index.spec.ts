import { LengthUnit } from ".";

describe("Length Unit Convert", function () {


    test("Metric Unit Convert", function () {
        expect(LengthUnit.metricConvert(1, "pm", "nm")).toBe(0.001);
        expect(LengthUnit.metricConvert(1, "pm", "um")).toBe(0.000001);
        expect(LengthUnit.metricConvert(1, "pm", "mm")).toBe(0.000000001);
        expect(LengthUnit.metricConvert(1, "pm", "cm")).toBe(0.0000000001);
        expect(LengthUnit.metricConvert(1, "pm", "dm")).toBe(0.00000000001);
        expect(LengthUnit.metricConvert(1, "pm", "m")).toBe(0.000000000001);
        expect(LengthUnit.metricConvert(1, "pm", "km")).toBe(0.000000000000001);

        expect(LengthUnit.metricConvert(1, "nm", "pm")).toBe(1000);
        expect(LengthUnit.metricConvert(1, "um", "pm")).toBe(1000000);
        expect(LengthUnit.metricConvert(1, "mm", "pm")).toBe(1000000000);
        expect(LengthUnit.metricConvert(1, "cm", "pm")).toBe(10000000000);
        expect(LengthUnit.metricConvert(1, "dm", "pm")).toBe(100000000000);
        expect(LengthUnit.metricConvert(1, "m", "pm")).toBe(1000000000000);
        expect(LengthUnit.metricConvert(1, "km", "pm")).toBe(1000000000000000);
    });


    test("Chinese Unit Convert", function () {
        expect(LengthUnit.chineseConvert(1, "hao", "lii")).toBe(0.1);
        expect(LengthUnit.chineseConvert(1, "hao", "fen")).toBe(0.01);
        expect(LengthUnit.chineseConvert(1, "hao", "cun")).toBe(0.001);
        expect(LengthUnit.chineseConvert(1, "hao", "chi")).toBe(0.0001);
        expect(LengthUnit.chineseConvert(1, "hao", "zhang")).toBe(0.00001);
        expect(LengthUnit.chineseConvert(1, "hao", "li").toFixed(9)).toBe("0.000000067");
        expect(LengthUnit.chineseConvert(1, "hao", "gongli").toFixed(9)).toBe("0.000000033");

        expect(LengthUnit.chineseConvert(1, "lii", "hao")).toBe(10);
        expect(LengthUnit.chineseConvert(1, "fen", "hao")).toBe(100);
        expect(LengthUnit.chineseConvert(1, "cun", "hao")).toBe(1000);
        expect(LengthUnit.chineseConvert(1, "chi", "hao")).toBe(10000);
        expect(LengthUnit.chineseConvert(1, "zhang", "hao")).toBe(100000);
        expect(LengthUnit.chineseConvert(1, "li", "hao")).toBe(15000000);
        expect(LengthUnit.chineseConvert(1, "gongli", "hao")).toBe(30000000);
    });


    test("British Unit Convert", function () {
        expect(LengthUnit.britishConvert(1, "in", "ft").toFixed(4)).toBe("0.0833");
        expect(LengthUnit.britishConvert(1, "in", "yd").toFixed(4)).toBe("0.0278");
        expect(LengthUnit.britishConvert(1, "in", "ftm").toFixed(4)).toBe("0.0139");
        expect(LengthUnit.britishConvert(1, "in", "fur").toFixed(5)).toBe("0.00013");
        expect(LengthUnit.britishConvert(1, "in", "mi").toFixed(6)).toBe("0.000016");

        expect(LengthUnit.britishConvert(1, "ft", "in")).toBe(12);
        expect(LengthUnit.britishConvert(1, "yd", "in")).toBe(36);
        expect(LengthUnit.britishConvert(1, "ftm", "in")).toBe(72);
        expect(LengthUnit.britishConvert(1, "fur", "in")).toBe(7920);
        expect(LengthUnit.britishConvert(1, "mi", "in")).toBe(63360);
    });


    test("Metric to Chinese", function () {
        expect(LengthUnit.convert(1, "pm", "hao").toFixed(8)).toBe("0.00000003");
        expect(LengthUnit.convert(1, "nm", "lii").toFixed(6)).toBe("0.000003");
        expect(LengthUnit.convert(1, "um", "fen").toFixed(4)).toBe("0.0003");
        expect(LengthUnit.convert(1, "mm", "cun").toFixed(2)).toBe("0.03");
        expect(LengthUnit.convert(1, "cm", "chi").toFixed(2)).toBe("0.03");
        expect(LengthUnit.convert(1, "dm", "zhang").toFixed(2)).toBe("0.03");
        expect(LengthUnit.convert(1, "m", "li").toFixed(3)).toBe("0.002");
        expect(LengthUnit.convert(1, "km", "gongli").toFixed(0)).toBe("1");
    });



    test("Metric to British", function () {
        expect(LengthUnit.convert(1, "pm", "in").toFixed(12)).toBe("0.000000000039");
        expect(LengthUnit.convert(1, "nm", "ft").toFixed(10)).toBe("0.0000000033");
        expect(LengthUnit.convert(1, "um", "yd").toFixed(7)).toBe("0.0000011");
        expect(LengthUnit.convert(1, "mm", "ftm").toFixed(7)).toBe("0.0005468");
        expect(LengthUnit.convert(1, "cm", "fur").toFixed(5)).toBe("0.00005");
        expect(LengthUnit.convert(1, "dm", "mi").toFixed(6)).toBe("0.000062");
        expect(LengthUnit.convert(1, "m", "mi").toFixed(5)).toBe("0.00062");
        expect(LengthUnit.convert(1, "km", "mi").toFixed(4)).toBe("0.6214");
    });

    test("Chinese to Metric", function () {
        expect(LengthUnit.convert(1, "hao", "pm").toFixed(1)).toBe("33333333.3");
        expect(LengthUnit.convert(1, "lii", "nm").toFixed(3)).toBe("333333.333");
        expect(LengthUnit.convert(1, "fen", "um").toFixed(5)).toBe("3333.33333");
        expect(LengthUnit.convert(1, "cun", "mm").toFixed(7)).toBe("33.3333333");
        expect(LengthUnit.convert(1, "chi", "cm").toFixed(7)).toBe("33.3333333");
        expect(LengthUnit.convert(1, "zhang", "dm").toFixed(7)).toBe("33.3333333");
        expect(Math.round(LengthUnit.convert(1, "li", "m"))).toBe(500);
        expect(Math.round(LengthUnit.convert(1, "gongli", "km"))).toBe(1);
    });


    test("Chinese to British", function () {
        expect(LengthUnit.convert(1, "hao", "in").toFixed(6)).toBe("0.001312");
        expect(LengthUnit.convert(1, "lii", "ft").toFixed(6)).toBe("0.001094");
        expect(LengthUnit.convert(1, "fen", "yd").toFixed(6)).toBe("0.003645");
        expect(LengthUnit.convert(1, "cun", "ftm").toFixed(6)).toBe("0.018227");
        expect(LengthUnit.convert(1, "chi", "fur").toFixed(6)).toBe("0.001657");
        expect(LengthUnit.convert(1, "zhang", "mi").toFixed(6)).toBe("0.002071");
        expect(LengthUnit.convert(1, "li", "mi").toFixed(6)).toBe("0.310686");
        expect(LengthUnit.convert(1, "gongli", "mi").toFixed(6)).toBe("0.621371");
    });


    test("British to Metric", function () {
        expect(LengthUnit.convert(1, "in", "pm")).toBe(25400000000);
        expect(LengthUnit.convert(1, "ft", "nm")).toBe(304800000);
        expect(LengthUnit.convert(1, "yd", "um")).toBe(914400);
        expect(LengthUnit.convert(1, "ftm", "mm")).toBe(1828.8);
        expect(LengthUnit.convert(1, "fur", "cm")).toBe(20116.8);
        expect(LengthUnit.convert(1, "mi", "dm")).toBe(16093.44);
    });



    test("British to Chinese", function () {
        expect(LengthUnit.convert(1, "in", "hao")).toBe(762);
        expect(LengthUnit.convert(1, "ft", "lii")).toBe(914.4);
        expect(LengthUnit.convert(1, "yd", "fen")).toBe(274.32);
        expect(LengthUnit.convert(1, "ftm", "cun")).toBe(54.864);
        expect(LengthUnit.convert(1, "fur", "chi")).toBe(603.504);
        expect(LengthUnit.convert(1, "mi", "zhang")).toBe(482.8032);
    });


});
