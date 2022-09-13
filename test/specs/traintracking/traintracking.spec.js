const landingScreen = require("../../screenobjects/landing/landingscreen")
const registrationScreen = require("../../screenobjects/registration/registrationscreen")
const homeScreen = require("../../screenobjects/home/homescreen")
const trainTrackingHomeScreen = require("../../screenobjects/traintracking/traintrackinghomescreen")
const trainTrackingInfoScreen = require("../../screenobjects/traintracking/traintrackinginfoscreen")
const traintrackingData = require("../../testdata/traintrackingdata.json")
const searchTrainListScreen = require("../../screenobjects/search/searchtrainlistscreen")
const trainTrackingSMSScreen = require("../../screenobjects/traintracking/traintrackingsmsscreen")


describe('Verify Train Tracking Feature', () => {

    before(async()=>{
        await landingScreen.clickSkipBtn()
        await registrationScreen.clickSkipRegistrationBtn()
        await homeScreen.clickTrainTackingButton()
    })
    it('TC _023: Verify user can view train tracking information',async()=>{
        await trainTrackingHomeScreen.clickInfoBtn()
        expect(await trainTrackingInfoScreen.getInfoText()).toContain(traintrackingData.info)
    })
    it('TC _024: Verify user can get train tracking information by searching train by start and stop station name',async()=>{
        await driver.back()
        console.log(await searchTrainListScreen.getTrainList())
        expect(await searchTrainListScreen.getTrainList()).toStrictEqual(traintrackingData.trainList)
        await trainTrackingHomeScreen.selectFromStation(traintrackingData.fromStationName)
        await trainTrackingHomeScreen.selectToStation(traintrackingData.toStationName)
        expect(await trainTrackingHomeScreen.getTrainList()).toStrictEqual(traintrackingData.trainListAfterSearch)
        await trainTrackingHomeScreen.clickFirstTrain()
        expect(await trainTrackingSMSScreen.getSmsNumber()).toBe(traintrackingData.EkotaTraininfo.smsNumber)
        expect(await trainTrackingSMSScreen.getTrainNumber()).toBe(traintrackingData.EkotaTraininfo.trainNumber)
        await trainTrackingSMSScreen.clickTrackBtn()
        await driver.acceptAlert()
        expect(await trainTrackingSMSScreen.getSmsNumberFromNativeApp()).toBe(traintrackingData.EkotaTraininfo.smsNumber)
        expect(await trainTrackingSMSScreen.getTrainNumbeFromNativeSMSApp()).toBe(traintrackingData.EkotaTraininfo.trainNumber)
    })


});