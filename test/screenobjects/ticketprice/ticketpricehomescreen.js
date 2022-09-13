class TicketPriceHomeScreen {

    easternTicketPriceBtnSelector = `//*[@resource-id="com.decodelab.amaderrel:id/btnPrice"]`
    westernTicketPriceBtnSelector = `//*[@resource-id="com.decodelab.amaderrel:id/btnPrice1"]`

    async clickEasternTicketPriceBtn() {
        await $(this.easternTicketPriceBtnSelector).click()
    }
    async clickWasternTicketPriceBtn() {
        await $(this.westernTicketPriceBtnSelector).click()
    }

}

module.exports = new TicketPriceHomeScreen()