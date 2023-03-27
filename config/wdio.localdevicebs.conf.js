const config = require("./wdio.shared.conf")
require('dotenv').config({
    path:`.env.test`,
   override:true
})

config.user = process.env.BS_USER
config.key = process.env.BS_KEY

config.specs = [

    './test/specs/landing/landing.spec.js',
    './test/specs/account/registration.spec.js',
    './test/specs/home/home.spec.js',
    './test/specs/search/search.spec.js',
    './test/specs/traintimeline/traintimeline.spec.js',
    './test/specs/ticketprice/ticketprice.spec.js',
    './test/specs/traintracking/traintracking.spec.js',
    './test/specs/mobileticket/mobileticket.spec.js',
    './test/specs/subscribe/subscribe.spec.js'

],
    config.suites = {
        account: [

            './test/specs/landing/landing.spec.js',
            './test/specs/account/registration.spec.js',
            './test/specs/home/home.spec.js'

        ],
        basicTest: [

            './test/specs/search/search.spec.js',
            './test/specs/traintimeline/traintimeline.spec.js',
            './test/specs/ticketprice/ticketprice.spec.js',
            './test/specs/traintracking/traintracking.spec.js'
        ]
    },


    config.capabilities = [
        {
            platformName: "Android",
            "appium:platformVersion": "9.0",
            "appium:deviceName": "Google Pixel 3a",
            "appium:automationName": "UIAutomator2",
            "appium:app": "bs://0d1db8abc756cd07d625628818d32def1f5b5997",
            "appium:autoGrantPermissions": true
        }
    ]

config.services = ['browserstack'];

exports.config = config;