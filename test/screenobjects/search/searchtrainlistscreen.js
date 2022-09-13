class SearchTrainListScreen{
    trainNameSelector = `//*[@resource-id="com.decodelab.amaderrel:id/tvName"]`
    toReachStationTextSelector=`//*[@resource-id="com.decodelab.amaderrel:id/tvTo"]`


    async getTrainList() {
        let trainList = []
        let locatorList = await $$(this.trainNameSelector)
        for (var name of locatorList) {
            trainList.push(await name.getText())
        }
        return trainList
    }

    async getToReachStationNameList() {
        let stationList = []
        let locatorList = await $$(this.toReachStationTextSelector)
        for (var name of locatorList) {
            stationList.push(await name.getText())
        }
        return stationList
    }

    async clickOnTrainName(trainName) {
        await $(`//*[@text='${trainName}']`).click()
    }
}

module.exports = new SearchTrainListScreen()