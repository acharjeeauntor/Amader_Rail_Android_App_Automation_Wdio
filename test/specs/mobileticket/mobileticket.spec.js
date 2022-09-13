const landingScreen = require("../../screenobjects/landing/landingscreen")
const registrationScreen = require("../../screenobjects/registration/registrationscreen")
const homeScreen = require("../../screenobjects/home/homescreen")
const mobileTicketHomeScreen = require("../../screenobjects/mobileticket/mobiletickethomescreen")
const smsSystemRulesScreen = require("../../screenobjects/mobileticket/smssystemrulesscreen")
const mobileTicketData= require("../../testdata/mobileticketdata.json")


describe('Verify Mobile Ticket Feature', () => {

    before(async()=>{
        await landingScreen.clickSkipBtn()
        await registrationScreen.clickSkipRegistrationBtn()
        await homeScreen.clickMobileTicketButton()
    })
    it('TC _025: Verify user can view the SMS rules to buy ticket using sms',async()=>{
        await mobileTicketHomeScreen.clickSmsRulesBtn()
        expect(await smsSystemRulesScreen.isStepImageExist()).toBeTruthy()
       
    })

    it('TC _026: Verify user can cancel buy a train ticket using SMS system',async()=>{
        await driver.back()
        await mobileTicketHomeScreen.clickBuyTicketBtn()
        expect(await mobileTicketHomeScreen.isPopupExist()).toBeTruthy()
        await mobileTicketHomeScreen.clickCancelBtn()
        expect(await mobileTicketHomeScreen.isPopupExist()).toBeFalsy()
    })

    it('TC _027: Verify user can buy a train ticket using SMS system',async()=>{
        await mobileTicketHomeScreen.clickBuyTicketBtn()
        await mobileTicketHomeScreen.clickCallBtn()
        expect(await mobileTicketHomeScreen.getDialNumber()).toBe(mobileTicketData.smsDialNumber)
    })


});