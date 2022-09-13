class SubscribeInfoScreen{

    subscribeRequestBtnSelector=`//*[@resource-id="com.decodelab.amaderrel:id/btnSub"]`

    async clickSubscribeRequestBtn(){
        await  $(this.subscribeRequestBtnSelector).click()
    }
}

module.exports = new SubscribeInfoScreen()