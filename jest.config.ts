import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
    dir: "src",
});

const config: Config = {
    coverageProvider: "v8",
    testEnvironment: "jsdom",
    clearMocks: true,
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
    moduleNameMapper: {
        "^@/components/(.*)": "<rootDir>/src/components/$1",
        "^@/utils/(.*)$": "<rootDir>/src/utils/$1",
        "^@/api/(.*)$": "<rootDir>/src/app/api/$1",
        "^@/public/(.*)$": "<rootDir>/public/$1",
        "^@/models/(.*)$": "<rootDir>/src/models/$1",
        "^@/hooks/(.*)$": "<rootDir>/src/hooks/$1",
        "^@/(.*)": "<rootDir>/src/$1",
    },
    collectCoverage: true,
};

export default createJestConfig(config);
