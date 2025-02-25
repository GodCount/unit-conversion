export default {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleNameMapper: {
        "^src/(.*)$": "<rootDir>/src/$1",
    },
    modulePathIgnorePatterns: ["./dist/"],
    coveragePathIgnorePatterns: [],
    collectCoverageFrom: ["./src/**/*.ts", "!./src/**/*.spec.ts"],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
};
