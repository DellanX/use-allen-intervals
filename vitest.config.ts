import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        include: [
            "tests/**/*.test.ts"
        ]
        ,
        // reporters: include default console reporter and junit reporter to write XML file
        reporters: [
            'default',
            ['junit', { outputFile: 'coverage/junit.xml' }]
        ],
        coverage: {
            provider: 'istanbul',
            reporter: ['text', 'lcov'],
            reportsDirectory: 'coverage'
        }
    },
});
