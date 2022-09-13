const landingScreen = require("../../screenobjects/landing/landingscreen")
const registrationScreen = require("../../screenobjects/registration/registrationscreen")
const homeScreen = require("../../screenobjects/home/homescreen")
const trainTimelineHomeScreen = require("../../screenobjects/traintimeline/traintimelinehomescreen")
const trainDetailScreen = require("../../screenobjects/search/traindetailscreen")
const searchTrainListScreen = require("../../screenobjects/search/searchtrainlistscreen")
const traintimelineData = require("../../testdata/traintimelinedata.json")
const trainStopageStationListScreen  = require("../../screenobjects/search/trainstopagestationlistscreen")
const trainStationListScreen = require("../../screenobjects/search/trainstationlistscreen")
const ticketPriceDetailScreen = require("../../screenobjects/ticketprice/ticketpricedetailscreen")


describe('Verify Train Timeline Feature', () => {

    before(async()=>{
        await landingScreen.clickSkipBtn()
        await registrationScreen.clickSkipRegistrationBtn()
        await homeScreen.clickTrainTimeButton()
    })
    it('TC _017: Verify User can view train list when search train by start and stop station name',async()=>{
        await trainTimelineHomeScreen.selectFromStation(traintimelineData.fromStationName)
        await trainTimelineHomeScreen.selectToStation(traintimelineData.toStationName)
        expect(await searchTrainListScreen.getTrainList()).toStrictEqual(traintimelineData.trainList)
    })

    it('TC _018: Verify User can view train details information when search train by start and stop station name',async()=>{
        let firstTrainName= traintimelineData.trainList[0]
        await searchTrainListScreen.clickOnTrainName(firstTrainName)
        let trainInfo = await trainDetailScreen.getTrainInfo()
        expect(trainInfo.trainName).toBe(firstTrainName)
        expect(trainInfo.trainFromStationName).toBe(traintimelineData.fromStationName)
        expect(trainInfo.trainToStationName).toBe(traintimelineData.toStationName)
        expect(trainInfo.trainOffday).toBe(traintimelineData.firstTrainOffDay)
    })

    it('TC _019: Verify User can view train stopage station name',async()=>{
        await trainDetailScreen.clickStopageBtn()
        expect(await trainStopageStationListScreen.isStopageTitleExist()).toBeTruthy()
    })

    it('TC _020: Verify User can view train ticket price details information',async()=>{
        await driver.back()
        await trainDetailScreen.clickTicketPriceBtn()
        await trainStationListScreen.clickFirstStationTransection()
        expect(await ticketPriceDetailScreen.getShovonChairPrice()).toBe(traintimelineData.shovonChairPrice)
    })


});