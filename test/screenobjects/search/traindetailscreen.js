class TrainDetailScreen{

    trainNameTextSelector = `//*[@resource-id="com.decodelab.amaderrel:id/txName"]`
    fromStationTextSelector = `//*[@resource-id="com.decodelab.amaderrel:id/txFrom"]`
    toStationTextSelector = `//*[@resource-id="com.decodelab.amaderrel:id/txTo"]`
    trainOffdayTextSelector = `//*[@resource-id="com.decodelab.amaderrel:id/txOff"]`
    trainStopageBtnSelector = `//*[@resource-id="com.decodelab.amaderrel:id/txDetails"]`
    ticketpriceBtnSelector = `//*[@resource-id="com.decodelab.amaderrel:id/btnTicketPrice"]`

    async getTrainInfo() {
        var trainInfo = {}
        trainInfo.trainName = await $(this.trainNameTextSelector).getText()
        trainInfo.trainFromStationName = await $(this.fromStationTextSelector).getText()
        trainInfo.trainToStationName = await $(this.toStationTextSelector).getText()
        trainInfo.trainOffday = await $(this.trainOffdayTextSelector).getText()
        return trainInfo
    }

    async clickStopageBtn() {
        await $(this.trainStopageBtnSelector).click()
    }

    async clickTicketPriceBtn() {
        await $(this.ticketpriceBtnSelector).click()
    }

}
module.exports = new TrainDetailScreen()