module.exports = {
    roots: ["<rootDir>/test"],
    testMatch: ["**/*.spec.ts"],
    transform: {
      "^.+\\.ts$": "ts-jest",
    },
    moduleNameMapper: {
      "@/(.*)": "<rootDir>/src/$1",
    },
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
  };
  
  