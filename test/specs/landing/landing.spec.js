const landingScreen = require("../../screenobjects/landing/landingscreen")
const registrationScreen = require("../../screenobjects/registration/registrationscreen")

describe('Verify Landing Screen', () => {
    it('TC _001: Verify User can view landing pages for first time usage',async()=>{
        expect(await landingScreen.isLiveTrackingLandingPageExist()).toBeTruthy()
    })

    it('TC _002: Verify user can go to next landing pages by pressing on Next button',async()=>{
        await landingScreen.clickNextBtn()
        expect(await landingScreen.isNoticeBoardLandingPageExist()).toBeTruthy()
    })

    it('TC _003: Verify user can skip landing pages by pressing on Skip button',async()=>{
        await landingScreen.clickSkipBtn()
        expect(await registrationScreen.isAppLogoExist()).toBeTruthy()
    })

});