/**
 * Created by k_zenchyk on 2/6/16.
 */
exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        'e2e/*.js'
    ],
    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:3001/',

    framework: 'jasmine',
    directConnect: true,

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};