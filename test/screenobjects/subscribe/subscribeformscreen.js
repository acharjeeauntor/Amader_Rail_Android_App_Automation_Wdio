class SubscribeFormScreen{

    nameInputSelector=`//*[@resource-id="com.decodelab.amaderrel:id/txName1"]`
    addressInputSelector=`//*[@resource-id="com.decodelab.amaderrel:id/txAddress1"]`
    subscribeDurationSelector=`//*[@resource-id="com.decodelab.amaderrel:id/card_view"]`
    oneYearSubscribeDurationTextSelector=`//*[@text="1 Year"]`
    bkashAmountInputSelector=`//*[@resource-id="com.decodelab.amaderrel:id/txAmount1"]`
    bkashLastFourDigitInputSelector=`//*[@resource-id="com.decodelab.amaderrel:id/txNumber1"]`
    bkashTransactionIdInputSelector=`//*[@resource-id="com.decodelab.amaderrel:id/txTaxID1"]`
    contactNumberInputSelector=`//*[@resource-id="com.decodelab.amaderrel:id/txContact1"]`
    submitRequestBtnSelector=`//*[@resource-id="com.decodelab.amaderrel:id/btnSave"]`
    toastMsgXpath=`/hierarchy/android.widget.Toast`

    async enterName(name){
        await $(this.nameInputSelector).setValue(name)
    }
    async enterAddress(address){
        await $(this.addressInputSelector).setValue(address)
    }
    async selectSubscribeDuration(){
        await $(this.subscribeDurationSelector).click()
        await $(this.oneYearSubscribeDurationTextSelector).click()
    }
    async enterBkashAmount(amount){
        await $(this.bkashAmountInputSelector).setValue(amount)
    }
    async enterBkashLastFourDigit(digit){
        await $(this.bkashLastFourDigitInputSelector).setValue(digit)
    }
    async enterBkashTransactionId(id){
        await $(this.bkashTransactionIdInputSelector).setValue(id)
    }
    async enterContactNumber(number){
        await $(this.contactNumberInputSelector).setValue(number)
    }
    async clickSubmitBtn(){
        await $(this.submitRequestBtnSelector).click()
    }
    async getToastMsg(){
        return await $(this.toastMsgXpath).getText()
    }
}

module.exports = new SubscribeFormScreen()