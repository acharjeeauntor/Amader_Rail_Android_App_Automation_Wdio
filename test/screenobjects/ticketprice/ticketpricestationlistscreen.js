class TicketPriceStationListScreen{
    stationSelector = `//*[@resource-id="com.decodelab.amaderrel:id/card_view1"]`
    fromStationInputSelector = `//*[@resource-id="com.decodelab.amaderrel:id/etFrom"]`
    toStationInputSelector = `//*[@resource-id="com.decodelab.amaderrel:id/etTo"]`
    stationSearchInputSelector = `//*[@resource-id="com.decodelab.amaderrel:id/etSearch"]`

    async isStationListExist() {
        return await $(this.stationSelector).isExisting()
    }
    async enterFromStationName(stationName) {
        await $(this.fromStationInputSelector).click()
        await $(this.stationSearchInputSelector).setValue(stationName)
    }
    async enterToStationName(stationName) {
        await $(this.toStationInputSelector).click()
        await $(this.stationSearchInputSelector).setValue(stationName)
    }
    async selectFromStation(stationName) {
        await $$(`//*[@text="${stationName}"]`)[1].click()
    }
    async selectToStation(stationName) {
        await $$(`//*[@text="${stationName}"]`)[1].click()
    }
    async clickFirstStation() {
        await $(this.stationSelector).click()
      }

}

module.exports = new TicketPriceStationListScreen()