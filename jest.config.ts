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
        "^@/(.*)": "<rootDir>/src/$1",
    },
    collectCoverage: true,
};

export default createJestConfig(config);
