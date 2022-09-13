class TrainTrackingSMSScreen{
    smsNumberTextSelector = `//*[@resource-id="com.decodelab.amaderrel:id/etFrom"]`
    trainNoTextSelector = `//*[@resource-id="com.decodelab.amaderrel:id/etTo"]`
   trackingBtnSelector = `//*[@resource-id="com.decodelab.amaderrel:id/btnSave"]`
   nativeSmsTitleSelector = `//*[@resource-id="com.google.android.apps.messaging:id/conversation_title"]`
   nativeSmsComposeInputSelector = `//*[@resource-id="com.google.android.apps.messaging:id/compose_message_text"]`


   async getSmsNumber(){
    return await $(this.smsNumberTextSelector).getText()
   }

   async getTrainNumber(){
    return await $(this.trainNoTextSelector).getText()
   }
   async clickTrackBtn(){
     await $(this.trackingBtnSelector).click()
   }
   async getSmsNumberFromNativeApp(){
    return await $(this.nativeSmsTitleSelector).getText()
   }

   async getTrainNumbeFromNativeSMSApp(){
    return await $(this.nativeSmsComposeInputSelector).getText()
   }

}

module.exports = new TrainTrackingSMSScreen()