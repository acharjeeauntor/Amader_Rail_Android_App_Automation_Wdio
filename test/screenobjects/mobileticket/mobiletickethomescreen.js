class MobileTicketHomeScreen {

    smsRulesBtnSelector = `//*[@resource-id="com.decodelab.amaderrel:id/btnRules"]`
    buyTicketBtnSelector = `//*[@resource-id="com.decodelab.amaderrel:id/btnSystem"]`
    smsSystemPopupSelector = `//*[@resource-id="com.decodelab.amaderrel:id/custom"]`
    cancelBtnSelector = `//*[@resource-id="com.decodelab.amaderrel:id/button2"]`
    callBtnSelector = `//*[@resource-id="com.decodelab.amaderrel:id/fab"]`
    callDialerSelector = `//*[@resource-id="com.android.dialer:id/digits"]`

    

    async clickSmsRulesBtn() {
        await $(this.smsRulesBtnSelector).click()
    }
    async clickBuyTicketBtn() {
        await $(this.buyTicketBtnSelector).click()
    }
    async isPopupExist() {
        return await $(this.smsSystemPopupSelector).isExisting()
    }
    async clickCancelBtn() {
        await $(this.cancelBtnSelector).click()
    }
    async clickCallBtn() {
        await $(this.callBtnSelector).click()
    }
    async getDialNumber(){
        return await $(this.callDialerSelector).getText()
    }
}

module.exports = new MobileTicketHomeScreen()