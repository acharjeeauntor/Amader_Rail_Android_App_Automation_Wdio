class TrainTrackingInfoScreen{
    
    infoTextSelector=`//*[@resource-id="com.decodelab.amaderrel:id/textView2"]`
    
    
    async getInfoText(){
        return await $(this.infoTextSelector).getText()
    }
}
module.exports = new TrainTrackingInfoScreen()