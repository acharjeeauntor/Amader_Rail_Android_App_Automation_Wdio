const landingScreen = require("../../screenobjects/landing/landingscreen")
const registrationScreen = require("../../screenobjects/registration/registrationscreen")
const homeScreen = require("../../screenobjects/home/homescreen")
const registrationData = require("../../testdata/registrationData.json")

describe('Verify Home Screen', () => {

    before(async () => {
        await landingScreen.clickSkipBtn()
    })


    it('TC _007: Verify User can Skip Registration to the application', async () => {
        await registrationScreen.clickSkipRegistrationBtn()
        expect(await homeScreen.isAppNameExist()).toBeTruthy()
 
     })

    it('TC _008: Verify user can view the App Name and Drawer icon in the top left corner', async () => {
        expect(await homeScreen.isNavigationDrawerExist()).toBeTruthy()
        expect(await homeScreen.isAppNameExist()).toBeTruthy()
 
     })

     it('TC _009: Verify Nine Box Options are showing and clickable', async () => {
        expect(await homeScreen.isSearchBoxDisplayed()).toBeTruthy()
        expect(await homeScreen.isTrainTimeBoxDisplayed()).toBeTruthy()
        expect(await homeScreen.isTicketPriceBoxDisplayed()).toBeTruthy()
        expect(await homeScreen.isTrainTrackingBoxDisplayed()).toBeTruthy()
        expect(await homeScreen.isTrackingLiveBoxDisplayed()).toBeTruthy()
        expect(await homeScreen.isNoticeBoardBoxDisplayed()).toBeTruthy()
        expect(await homeScreen.isStationMapBoxDisplayed()).toBeTruthy()
        expect(await homeScreen.isNumberBoxDisplayed()).toBeTruthy()
        expect(await homeScreen.isMobileTicketBoxDisplayed()).toBeTruthy()

    })

    it('TC _010: Verify user can re-sync the train information', async () => {
        await homeScreen.clickSyncButton()
        expect(await homeScreen.isInfoUpdateMessageExist()).toBeTruthy()

    })


});