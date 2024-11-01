module.exports = {
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['json-summary', 'json', 'lcov', 'text', 'clover'], // Incluye json-summary para el resumen global
    collectCoverageFrom: [
        "src/**/*.{js,jsx}",
        "!src/**/*.test.{js,jsx}",
        "!src/index.js"
    ],
};
