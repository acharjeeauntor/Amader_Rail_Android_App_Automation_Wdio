
class SearchHomeScreen {

    stationNameSelector = `//*[@resource-id="com.decodelab.amaderrel:id/tvName"]`
    stationTextSelector=`//*[@resource-id="com.decodelab.amaderrel:id/txStation"]`
    trainTextSelector=`//*[@resource-id="com.decodelab.amaderrel:id/txName"]`
    searchStationInputSelector = `//*[@resource-id="com.decodelab.amaderrel:id/etStation"]`
    searchTrainInputSelector = `//*[@resource-id="com.decodelab.amaderrel:id/etName"]`
    noResultMessageSelector=`//*[@resource-id="com.decodelab.amaderrel:id/tvNoResult"]`


    async getFirstStationName() {
        return await $(this.stationNameSelector).getText()
    }
    async getFirstTrainName() {
        return await $(this.stationNameSelector).getText()
    }
    async enterStationName(name) {
        await (await $(this.searchStationInputSelector)).setValue(name)
    }
    async enterTrainName(name) {
        await (await $(this.searchTrainInputSelector)).setValue(name)
    }
    async clickIntoFirstStationName() {
        await $(this.stationNameSelector).click()
    }
    async clickIntoFirstTrainName() {
        await $(this.stationNameSelector).click()
    }
    async getNoResultMessage() {
        return await $(this.noResultMessageSelector).getText()
    }
    async clickTrainNameTab() {
        await $(this.trainTextSelector).click()
    }


}

module.exports = new SearchHomeScreen();
