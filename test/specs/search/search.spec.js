const landingScreen = require("../../screenobjects/landing/landingscreen")
const registrationScreen = require("../../screenobjects/registration/registrationscreen")
const homeScreen = require("../../screenobjects/home/homescreen")
const searchHomeScreen = require("../../screenobjects/search/searchhomescreen")
const searchTrainListScreen = require("../../screenobjects/search/searchtrainlistscreen")
const searchData = require("../../testdata/searchdata.json")

describe('Verify Search Station/Train Feature', () => {
    before(async () => {
        await landingScreen.clickSkipBtn()
        await registrationScreen.clickSkipRegistrationBtn()
        await homeScreen.clickSearchButton()
    })

    it('TC _011: Verify user can view "আক্কেলপুর স্টেশন" in first position when search entry is empty',async()=>{
        expect(await searchHomeScreen.getFirstStationName()).toContain(searchData.searchByStation.firstStationName)
    })

    it("TC _012: Verify user can't found any station list after searching by invalid Station name", async () => {
        await searchHomeScreen.enterStationName(searchData.searchByStation.invalidStationName)
        expect(await searchHomeScreen.getNoResultMessage()).toContain(searchData.searchByStation.noResultMsg)
        
    })

    it('TC _013: Verify user can search train by valid Station name', async () => {
        await searchHomeScreen.enterStationName(searchData.searchByStation.stationName)
        await searchHomeScreen.clickIntoFirstStationName()
        expect(await searchTrainListScreen.getTrainList()).toStrictEqual(searchData.searchByStation.trainList)
    })

    it('TC _014: Verify user can view "অগ্নিবীনা এক্সপ্রেস" in first position when search entry is empty',async()=>{
        await driver.back()
        await homeScreen.clickSearchButton()
        await searchHomeScreen.clickTrainNameTab()
        expect(await searchHomeScreen.getFirstTrainName()).toContain(searchData.searchByTrain.firstTrainName)
    })

    it("TC _015: Verify user can't found any train list after searching by invalid train name", async () => {
        await searchHomeScreen.enterTrainName(searchData.searchByTrain.invalidTrainName)
        expect(await searchHomeScreen.getNoResultMessage()).toContain(searchData.searchByTrain.noResultMsg)
        
    })

    it('TC _016: Verify user can search train by valid train name', async () => {
        await searchHomeScreen.enterTrainName(searchData.searchByTrain.trainName)
        await searchHomeScreen.clickIntoFirstTrainName()
        expect(await searchTrainListScreen.getToReachStationNameList()).toStrictEqual(searchData.searchByTrain.stationList)
    })


    
});