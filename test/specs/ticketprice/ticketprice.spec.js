const landingScreen = require("../../screenobjects/landing/landingscreen")
const registrationScreen = require("../../screenobjects/registration/registrationscreen")
const homeScreen = require("../../screenobjects/home/homescreen")
const ticketPriceHomeScreen = require("../../screenobjects/ticketprice/ticketpricehomescreen")
const ticketPriceData = require("../../testdata/ticketpricedata.json")
const ticketPriceDetailScreen = require("../../screenobjects/ticketprice/ticketpricedetailscreen")
const ticketPriceStationListScreen = require("../../screenobjects/ticketprice/ticketpricestationlistscreen")
const westernTrainListScreen = require("../../screenobjects/ticketprice/westerntrainlistscreen")


describe('Verify Train Ticket Price Feature', () => {

    before(async()=>{
        await landingScreen.clickSkipBtn()
        await registrationScreen.clickSkipRegistrationBtn()
        await homeScreen.clickTicketPriceButton()
    })
    it('TC _021: Verify user can view Eastern Region train ticket price',async()=>{
        await ticketPriceHomeScreen.clickEasternTicketPriceBtn()
        expect(await ticketPriceStationListScreen.isStationListExist()).toBeTruthy()
        await ticketPriceStationListScreen.enterFromStationName(ticketPriceData.easternRegion.fromStationName)
        await ticketPriceStationListScreen.selectFromStation(ticketPriceData.easternRegion.fromStationName)
        await ticketPriceStationListScreen.enterToStationName(ticketPriceData.easternRegion.ToStationName)
        await ticketPriceStationListScreen.selectToStation(ticketPriceData.easternRegion.ToStationName)
        await ticketPriceStationListScreen.clickFirstStation()
        expect(await ticketPriceDetailScreen.getDistance()).toContain(ticketPriceData.easternRegion.distance)
        expect(await ticketPriceDetailScreen.getShovonChairPrice()).toContain(ticketPriceData.easternRegion.shovonChairPrice)
    })

    it('TC _022: Verify user can view Western Region train ticket price',async()=>{
        await driver.back()
        await driver.back()
        await ticketPriceHomeScreen.clickWasternTicketPriceBtn()
        await westernTrainListScreen.clickFirstWesternTrain()
        expect(await ticketPriceStationListScreen.isStationListExist()).toBeTruthy()
        await ticketPriceStationListScreen.enterFromStationName(ticketPriceData.weasternRegion.fromStationName)
        await ticketPriceStationListScreen.selectFromStation(ticketPriceData.weasternRegion.fromStationName)
        await ticketPriceStationListScreen.enterToStationName(ticketPriceData.weasternRegion.ToStationName)
        await ticketPriceStationListScreen.selectToStation(ticketPriceData.weasternRegion.ToStationName)
        await ticketPriceStationListScreen.clickFirstStation()
        expect(await ticketPriceDetailScreen.getDistance()).toContain(ticketPriceData.weasternRegion.distance)
        expect(await ticketPriceDetailScreen.getShovonChairPrice()).toContain(ticketPriceData.weasternRegion.shovonChairPrice)
    })


});