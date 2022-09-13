class TrainTrackingScreen{
infoBtnSelector=`//*[@resource-id="com.decodelab.amaderrel:id/button"]`
fromStationInputSelector = `//*[@resource-id="com.decodelab.amaderrel:id/etFrom"]`
toStationInputSelector = `//*[@resource-id="com.decodelab.amaderrel:id/etTo"]`
trainTextSelector = `//*[@resource-id="com.decodelab.amaderrel:id/tvName"]`


async clickFirstTrain() {
    await $(this.trainTextSelector).click()
 }
async selectFromStation(name) {
    await $(this.fromStationInputSelector).click()
    await $(`android= new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${name}")`).click()

}
async selectToStation(name) {
    await $(this.toStationInputSelector).click()
    await $(`android= new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${name}")`).click()
}
async clickInfoBtn(){
    await $(this.infoBtnSelector).click()
}
async getTrainList() {
    let trainList = []
    let locatorList = await $$(this.trainTextSelector)
    for (var name of locatorList) {
        trainList.push(await name.getText())
    }
    return trainList
}


}

module.exports = new TrainTrackingScreen()