// An example configuration file.
var HtmlReporter = require('protractor-beautiful-reporter');


exports.config = {
    directConnect: false,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome',
        'ignoreProtectedModeSettings': true,
        // "version": "11",
        // chromeOptions: {
        //     args: ["--headless", "--disable-gpu", "--window-size=800,600"]
        // }

    },

    ///////

    // multiCapabilities: [{
    //     'browserName': 'firefox'
    // }, {
    //     'browserName': 'chrome'
    // }],


    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['dist/out-tsc/specs/login.specs.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }, onPrepare: function () {
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'htmlreports/screenshots'
        }).getJasmine2Reporter());
    }
};
