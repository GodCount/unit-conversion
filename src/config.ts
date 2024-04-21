export interface ConvertConfig {
    bestUnitUpper: boolean;
    bestCenterSpace: boolean;
    bestFractionDigits: number;
}
export const DEF_CONVERT_CONFIG: ConvertConfig = {
    bestUnitUpper: false,
    bestCenterSpace: false,
    bestFractionDigits: 2,
};

let GlobalConfig = DEF_CONVERT_CONFIG;

export function getConvertGlobalConfig() {
    return GlobalConfig;
}

export function setConvertGlobalConfig(config: Partial<ConvertConfig>) {
    GlobalConfig = {
        ...GlobalConfig,
        ...config,
    };
}

export function resetConvertGlobalConfig() {
    GlobalConfig = DEF_CONVERT_CONFIG;
}
