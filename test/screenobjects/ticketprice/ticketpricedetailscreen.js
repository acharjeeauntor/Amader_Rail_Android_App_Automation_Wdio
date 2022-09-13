class TicketPriceDetailScreen{
    shovonChairPriceTextSelector = `//*[@resource-id="com.decodelab.amaderrel:id/txF"]`
    distanceTextSelector = `//*[@resource-id="com.decodelab.amaderrel:id/txa"]`

    async getShovonChairPrice(){
        return await $(this.shovonChairPriceTextSelector).getText()
    }
    async getDistance() {
        return await $(this.distanceTextSelector).getText()
    }
    async getShovonChairPrice() {
        return await $(this.shovonChairPriceTextSelector).getText()
    }

}

module.exports = new TicketPriceDetailScreen()