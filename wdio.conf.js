exports.config = {

    specs: [
        './test/*.js'
    ],
    exclude: [

    ],

    maxInstances: 10,

    capabilities: [
        {

            maxInstances: 1,

            browserName: 'chrome'
        }
    ],

    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['dot', 'spec', 'allure'],
    reporterOptions: {
        allure: {
            outputDir: 'allure-results'
        }
    },
    mochaOpts: {
        ui: 'bdd'
    },

};