const allure  = require('allure-commandline')

 const config  = {

    // port: 4723,
    
    // specs: [
        
    //         './test/specs/landing/landing.spec.js',
    //         './test/specs/account/*.spec.js',
    //         './test/specs/home/home.spec.js',
    //         './test/specs/search/search.spec.js',
    //         './test/specs/traintimeline/traintimeline.spec.js',
    //         './test/specs/ticketprice/ticketprice.spec.js',
    //         './test/specs/traintracking/*.spec.js',
    //         './test/specs/mobileticket/mobileticket.spec.js',
    //         './test/specs/subscribe/subscribe.spec.js'
        
    // ],
    // suites:{
    //     account:[
            
    //         './test/specs/landing/landing.spec.js',
    //         './test/specs/account/*.spec.js',
    //         './test/specs/home/home.spec.js',
            
    //     ],
    //     othersFeatures:[
            
    //         './test/specs/search/search.spec.js',
    //         './test/specs/traintimeline/traintimeline.spec.js',
    //         './test/specs/ticketprice/ticketprice.spec.js',
    //         './test/specs/traintracking/*.spec.js',
    //         './test/specs/mobileticket/mobileticket.spec.js',
    //         './test/specs/subscribe/subscribe.spec.js'
            
    //     ]
    // },

    
    maxInstances: 1,
   
    // capabilities: [{
    //     platformName:"Android",
    //     "appium:platformVersion": "10",
    //     "appium:deviceName":"Pixel-3a-test",
    //     "appium:automationName":"UIAutomator2",
    //     "appium:autoGrantPermissions":true,
    //     "appium:app":"./app/Amader Rail.apk",
    //     // "appium:noReset":true
    //     // "appium:appPackage":"com.decodelab.amaderrel",
    //     // "appium:appWaitActivity":".RegistrationActivity"
    // }],
   
    logLevel: 'error',
    
    bail: 0,
    
    // baseUrl: 'http://localhost',
    
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    // services: ['appium'],
    framework: 'mocha',
    reporters: ['spec',['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],
    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                10000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },


    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}

module.exports = config
