import Unit from "../unit";

export declare type MetricLengthUnitType = "pm" | "nm" | "um" | "mm" | "cm" | "dm" | "m" | "km";

export declare type ChineseLengthUnitType = "hao" | "lii" | "fen" | "cun" | "chi" | "zhang" | "li" | "gongli";

export declare type BritishLengthUnitType = "in" | "ft" | "yd" | "ftm" | "fur" | "mi";

export declare type LengthUnitType = MetricLengthUnitType | ChineseLengthUnitType | BritishLengthUnitType;



export class LengthUnit extends Unit<LengthUnitType> {


    static readonly PM_PER_NM = 1000;
    static readonly PM_PER_UM = LengthUnit.PM_PER_NM * 1000;
    static readonly PM_PER_MM = LengthUnit.PM_PER_UM * 1000;
    static readonly PM_PER_CM = LengthUnit.PM_PER_MM * 10;
    static readonly PM_PER_DM = LengthUnit.PM_PER_CM * 10;
    static readonly PM_PER_M = LengthUnit.PM_PER_DM * 10;
    static readonly PM_PER_KM = LengthUnit.PM_PER_M * 1000;


    static readonly HAO_PER_LII = 10;
    static readonly HAO_PER_FEN = LengthUnit.HAO_PER_LII * 10;
    static readonly HAO_PER_CUN = LengthUnit.HAO_PER_FEN * 10;
    static readonly HAO_PER_CHi = LengthUnit.HAO_PER_CUN * 10;
    static readonly HAO_PER_ZHANG = LengthUnit.HAO_PER_CHi * 10;
    static readonly HAO_PER_LI = LengthUnit.HAO_PER_ZHANG * 150;
    static readonly HAO_PER_GONGLI = LengthUnit.HAO_PER_LI * 2;


    static readonly IN_PER_FT = 12;
    static readonly IN_PER_YD = LengthUnit.IN_PER_FT * 3;
    static readonly IN_PER_FTM = LengthUnit.IN_PER_YD * 2;
    static readonly IN_PER_FUR = LengthUnit.IN_PER_FTM * 110;
    static readonly IN_PER_MI = LengthUnit.IN_PER_FUR * 8;

    static readonly PM_PER_IN = 25400000000;
    static readonly PM_PER_HAO = 33333333.333;

    static readonly HAO_PER_IN = 762;
    static readonly HAO_PER_PM = 1 / LengthUnit.PM_PER_HAO;


    static readonly IN_PER_PM = 1 / LengthUnit.PM_PER_IN;
    static readonly IN_PER_HAO = 1 / LengthUnit.HAO_PER_IN;




    static readonly METRIC_UNIT_TABLE = {
        pm: 1,
        nm: LengthUnit.PM_PER_NM,
        um: LengthUnit.PM_PER_UM,
        mm: LengthUnit.PM_PER_MM,
        cm: LengthUnit.PM_PER_CM,
        dm: LengthUnit.PM_PER_DM,
        m: LengthUnit.PM_PER_M,
        km: LengthUnit.PM_PER_KM,
    }

    static readonly CHINESE_UNIT_TABLE = {
        hao: 1,
        lii: LengthUnit.HAO_PER_LII,
        fen: LengthUnit.HAO_PER_FEN,
        cun: LengthUnit.HAO_PER_CUN,
        chi: LengthUnit.HAO_PER_CHi,
        zhang: LengthUnit.HAO_PER_ZHANG,
        li: LengthUnit.HAO_PER_LI,
        gongli: LengthUnit.HAO_PER_GONGLI,
    }


    static readonly BRITISH_UNIT_TABLE = {
        in: 1,
        ft: LengthUnit.IN_PER_FT,
        yd: LengthUnit.IN_PER_YD,
        ftm: LengthUnit.IN_PER_FTM,
        fur: LengthUnit.IN_PER_FUR,
        mi: LengthUnit.IN_PER_MI,
    }



    static readonly UNIT_TABLE: any = {
        hao_per_pm: LengthUnit.HAO_PER_PM,
        in_per_pm: LengthUnit.IN_PER_PM,
        pm_per_hao: LengthUnit.PM_PER_HAO,
        in_per_hao: LengthUnit.IN_PER_HAO,
        pm_per_in: LengthUnit.PM_PER_IN,
        hao_per_in: LengthUnit.HAO_PER_IN,
    }



    constructor(rawValue: number, initUnit: LengthUnitType) {
        super(rawValue, initUnit);
    }


    public static metricConvert(value: number, source: MetricLengthUnitType, target: MetricLengthUnitType) {
        if (source == target) return value;
        const pm = value * this.METRIC_UNIT_TABLE[source];
        if (isNaN(pm)) throw Error("LengthUnit value cannot be NaN!");
        return pm / this.METRIC_UNIT_TABLE[target];
    }

    public static chineseConvert(value: number, source: ChineseLengthUnitType, target: ChineseLengthUnitType) {
        if (source == target) return value;
        const hao = value * this.CHINESE_UNIT_TABLE[source];
        if (isNaN(hao)) throw Error("LengthUnit value cannot be NaN!");
        return hao / this.CHINESE_UNIT_TABLE[target];
    }



    public static britishConvert(value: number, source: BritishLengthUnitType, target: BritishLengthUnitType) {
        if (source == target) return value;
        const b_in = value * this.BRITISH_UNIT_TABLE[source];
        if (isNaN(b_in)) throw Error("LengthUnit value cannot be NaN!");
        return b_in / this.BRITISH_UNIT_TABLE[target];
    }


    public static convert(value: number, source: LengthUnitType, target: LengthUnitType) {
        if (this.METRIC_UNIT_TABLE[source as MetricLengthUnitType] && this.METRIC_UNIT_TABLE[target as MetricLengthUnitType]) {
            return LengthUnit.metricConvert(value, source as MetricLengthUnitType, target as MetricLengthUnitType);
        } else if (this.CHINESE_UNIT_TABLE[source as ChineseLengthUnitType] && this.CHINESE_UNIT_TABLE[target as ChineseLengthUnitType]) {
            return LengthUnit.chineseConvert(value, source as ChineseLengthUnitType, target as ChineseLengthUnitType);
        } else if (this.BRITISH_UNIT_TABLE[source as BritishLengthUnitType] && this.BRITISH_UNIT_TABLE[target as BritishLengthUnitType]) {
            return LengthUnit.britishConvert(value, source as BritishLengthUnitType, target as BritishLengthUnitType);
        }

        let minUnitValue = NaN;
        let sourceUnit = "";

        if (this.METRIC_UNIT_TABLE[source as MetricLengthUnitType]) {
            minUnitValue = LengthUnit.metricConvert(value, source as MetricLengthUnitType, "pm");
            sourceUnit = "pm";
        } else if (this.CHINESE_UNIT_TABLE[source as ChineseLengthUnitType]) {
            minUnitValue = LengthUnit.chineseConvert(value, source as ChineseLengthUnitType, "hao");
            sourceUnit = "hao";
        } else if (this.BRITISH_UNIT_TABLE[source as BritishLengthUnitType]) {
            minUnitValue = LengthUnit.britishConvert(value, source as BritishLengthUnitType, "in");
            sourceUnit = "in";
        }

        if (isNaN(minUnitValue)) throw Error("LengthUnit value cannot be NaN!");

        let unit = "";
        if (this.METRIC_UNIT_TABLE[target as MetricLengthUnitType]) {
            unit = `${sourceUnit}_per_pm`;
        } else if (this.CHINESE_UNIT_TABLE[target as ChineseLengthUnitType]) {
            unit = `${sourceUnit}_per_hao`;
        } else if (this.BRITISH_UNIT_TABLE[target as BritishLengthUnitType]) {
            unit = `${sourceUnit}_per_in`;
        }

        if (!this.UNIT_TABLE[unit]) throw Error("unit not exist!");

        const tmpValue = minUnitValue / this.UNIT_TABLE[unit];

        if (this.METRIC_UNIT_TABLE[target as MetricLengthUnitType]) {
            return LengthUnit.metricConvert(tmpValue, "pm", target as MetricLengthUnitType);
        } else if (this.CHINESE_UNIT_TABLE[target as ChineseLengthUnitType]) {
            return LengthUnit.chineseConvert(tmpValue, "hao", target as ChineseLengthUnitType);
        } else if (this.BRITISH_UNIT_TABLE[target as BritishLengthUnitType]) {
            return LengthUnit.britishConvert(tmpValue, "in", target as BritishLengthUnitType);
        }
        throw Error("target unit not exist!");
    }


    /**
     * @returns 皮米
     */
    get pm() {
        return LengthUnit.convert(this.rawValue, this.initUnit, "pm");
    }

    /**
     * @returns 纳米
     */
    get nm() {
        return LengthUnit.convert(this.rawValue, this.initUnit, "nm");
    }

    /**
     * @returns 微米
     */
    get um() {
        return LengthUnit.convert(this.rawValue, this.initUnit, "um");
    }

    /**
     * @returns 毫米
     */
    get mm() {
        return LengthUnit.convert(this.rawValue, this.initUnit, "mm");
    }

    /**
     * @returns 厘米
     */
    get cm() {
        return LengthUnit.convert(this.rawValue, this.initUnit, "cm");
    }

    /**
     * @returns 分米
     */
    get dm() {
        return LengthUnit.convert(this.rawValue, this.initUnit, "dm");
    }

    /**
     * @returns 米
     */
    get m() {
        return LengthUnit.convert(this.rawValue, this.initUnit, "m");
    }

    /**
     * @returns 千米
     */
    get km() {
        return LengthUnit.convert(this.rawValue, this.initUnit, "km");
    }



    /**
     * @returns 毫
     */
    get hao() {
        return LengthUnit.convert(this.rawValue, this.initUnit, "hao");
    }

    /**
     * @returns 厘
     */
    get lii() {
        return LengthUnit.convert(this.rawValue, this.initUnit, "lii");
    }

    /**
     * @returns 分
     */
    get fen() {
        return LengthUnit.convert(this.rawValue, this.initUnit, "fen");
    }

    /**
     * @returns 寸
     */
    get cun() {
        return LengthUnit.convert(this.rawValue, this.initUnit, "cun");
    }

    /**
     * @returns 尺
     */
    get chi() {
        return LengthUnit.convert(this.rawValue, this.initUnit, "chi");
    }

    /**
     * @returns 丈
     */
    get zhang() {
        return LengthUnit.convert(this.rawValue, this.initUnit, "zhang");
    }

    /**
     * @returns 里
     */
    get li() {
        return LengthUnit.convert(this.rawValue, this.initUnit, "li");
    }

    /**
     * @returns 公里
     */
    get gongli() {
        return LengthUnit.convert(this.rawValue, this.initUnit, "gongli");
    }



    /**
     * @returns 英寸
     */
    get in() {
        return LengthUnit.convert(this.rawValue, this.initUnit, "in");
    }

    /**
     * @returns 英尺
     */
    get ft() {
        return LengthUnit.convert(this.rawValue, this.initUnit, "ft");
    }

    /**
     * @returns 码
     */
    get yd() {
        return LengthUnit.convert(this.rawValue, this.initUnit, "yd");
    }

    /**
     * @returns 英寻
     */
    get ftm() {
        return LengthUnit.convert(this.rawValue, this.initUnit, "ftm");
    }

    /**
     * @returns 弗隆
     */
    get fur() {
        return LengthUnit.convert(this.rawValue, this.initUnit, "fur");
    }

    /**
     * @returns 英里
     */
    get mi() {
        return LengthUnit.convert(this.rawValue, this.initUnit, "mi");
    }



}
