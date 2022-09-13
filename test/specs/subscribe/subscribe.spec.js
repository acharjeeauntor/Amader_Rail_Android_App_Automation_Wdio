const landingScreen = require("../../screenobjects/landing/landingscreen")
const registrationScreen = require("../../screenobjects/registration/registrationscreen")
const homeScreen = require("../../screenobjects/home/homescreen")
const subscribeInfoScreen = require("../../screenobjects/subscribe/subscribeinfoscreen")
const subscribeFromScreen = require("../../screenobjects/subscribe/subscribeformscreen")
const subscribeData = require("../../testdata/subscribedata.json")


describe('Verify Subscribe Feature', () => {

    before(async()=>{
        await landingScreen.clickSkipBtn()
        await registrationScreen.clickSkipRegistrationBtn()
        await homeScreen.clickSubscribeButton()
    })
    it('TC _028: Verify empty fields validation message is showing while Subscribe to the application',async()=>{
       await subscribeInfoScreen.clickSubscribeRequestBtn()
       await subscribeFromScreen.clickSubmitBtn()
       expect(await subscribeFromScreen.getToastMsg()).toBe(subscribeData.errorMsg)
    })

    it('TC _029: Verify User can Subscribe to the application',async()=>{
        await subscribeFromScreen.enterName(subscribeData.name)
        await subscribeFromScreen.enterAddress(subscribeData.address)
        await subscribeFromScreen.selectSubscribeDuration()
        await subscribeFromScreen.enterBkashAmount(subscribeData.bKashAmount)
        await subscribeFromScreen.enterBkashLastFourDigit(subscribeData.lastFourDigitbKashNumber)
        await subscribeFromScreen.enterBkashTransactionId(subscribeData.bKashTransactionID)
        await subscribeFromScreen.enterContactNumber(subscribeData.contactNumber)
        await subscribeFromScreen.clickSubmitBtn()
        expect(await subscribeFromScreen.getToastMsg()).toBe(subscribeData.successMsg)
    })


});