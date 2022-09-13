const landingScreen = require("../../screenobjects/landing/landingscreen")
const registrationScreen = require("../../screenobjects/registration/registrationscreen")
const homeScreen = require("../../screenobjects/home/homescreen")
const registrationData = require("../../testdata/registrationData.json")

describe('Verify Account/Account Information', () => {

    // var lastActivityName;
    // var lastPackageName;

    before(async () => {
        await landingScreen.clickSkipBtn()
    })


    it('TC _004: Verify user will not Register to the application using empty input', async () => {
        
        //await driver.startActivity(lastPackageName, lastActivityName)

        await registrationScreen.clickSubmitBtn()
        let alertMessage = await driver.getAlertText()
        await driver.dismissAlert()
        expect(alertMessage).toContain(registrationData.alertMessage)

    })


    it('TC _005: Verify user will be Register to the application using valid information', async () => {
        // lastActivityName = await driver.getCurrentActivity()
        // lastPackageName = await driver.getCurrentPackage()

        // console.log(lastActivityName)
        // console.log(lastPackageName)

        await registrationScreen.enterName(registrationData.validInfo.name)
        await registrationScreen.enterPhoneNumber(registrationData.validInfo.phone)
        await registrationScreen.enterEmail(registrationData.validInfo.email)
        await registrationScreen.selectDistrict(registrationData.validInfo.district)
        await registrationScreen.clickSubmitBtn()
        expect(await homeScreen.isAppNameExist()).toBeTruthy()
    })
    //     it('TC _006: Verify user will not Register to the application using invalid input ', async () => {
    //         await registrationScreen.enterName(registrationData.validInfo.name)
    //         await registrationScreen.enterPhoneNumber(registrationData.invalidInfo.phone)
    //         await registrationScreen.enterEmail(registrationData.invalidInfo.email)
    //         await registrationScreen.selectDistrict(registrationData.validInfo.district)
    //         await registrationScreen.clickSubmitBtn()
    // let alertMessage = await driver.getAlertText()
    //         await driver.dismissAlert()
    //         expect(alertMessage).toContain(registrationData.alertMessage)

    //     })
    //     it('TC _007: Verify User can Skip Registration to the application ', async () => {
    //         await registrationScreen.clickSkipRegistrationBtn()
    //         expect(await homeScreen.isAppNameExist()).toBeTruthy()
    //     })
});