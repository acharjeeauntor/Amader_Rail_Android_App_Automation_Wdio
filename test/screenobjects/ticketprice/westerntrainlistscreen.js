class WesternTrainListScreen{
    westernTrainNameSelector=`//*[@resource-id="com.decodelab.amaderrel:id/textView1"]`
    async clickFirstWesternTrain() {
        await $(this.westernTrainNameSelector).click()
     }
}
module.exports = new WesternTrainListScreen()