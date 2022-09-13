const path = require('path')
const config=require('./wdio.shared.conf')

config.port = 4723;
config.specs= [
        
            './test/specs/landing/landing.spec.js',
            './test/specs/account/*.spec.js',
            './test/specs/home/home.spec.js',
            './test/specs/search/search.spec.js',
            './test/specs/traintimeline/traintimeline.spec.js',
            './test/specs/ticketprice/ticketprice.spec.js',
            './test/specs/traintracking/*.spec.js',
            './test/specs/mobileticket/mobileticket.spec.js',
            './test/specs/subscribe/subscribe.spec.js'
        
    ],
    config.suites={
        account:[
            
            './test/specs/landing/landing.spec.js',
            './test/specs/account/*.spec.js',
            './test/specs/home/home.spec.js',
            
        ],
        othersFeatures:[
            
            './test/specs/search/search.spec.js',
            './test/specs/traintimeline/traintimeline.spec.js',
            './test/specs/ticketprice/ticketprice.spec.js',
            './test/specs/traintracking/*.spec.js',
            './test/specs/mobileticket/mobileticket.spec.js',
            './test/specs/subscribe/subscribe.spec.js'
            
        ]
    },


config.capabilities = [
    {
        platformName:"Android",
        "appium:platformVersion": "10",
        "appium:deviceName":"Pixel-3a-test",
        "appium:automationName":"UIAutomator2",
        "appium:autoGrantPermissions":true,
        "appium:app":path.join(process.cwd(),"./app/Amader Rail.apk"),
    }
]


config.services=['appium'];

exports.config = config;