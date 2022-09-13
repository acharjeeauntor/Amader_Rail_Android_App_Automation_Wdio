class HomeScreen {
    appNameTextSelector = `//*[@text="আমাদের রেল"]`
    infoUpdateTextSelector = `//*[@resource-id="android:id/message"]`
    syncBtnSelector = `//*[@resource-id="com.decodelab.amaderrel:id/txSync"]`
    navigationDrawerIconSelector = '~Open navigation drawer'
    searchBtnSelector = `//*[@resource-id="com.decodelab.amaderrel:id/btnSearch"]`
    timeBtnSelector = `//*[@resource-id="com.decodelab.amaderrel:id/btnTime"]`
    priceBtnSelector = `//*[@resource-id="com.decodelab.amaderrel:id/btnPrice"]`
    trainTrackingBtnSelector = `//*[@resource-id="com.decodelab.amaderrel:id/btnTracking"]`
    trackingLiveBtnSelector = `//*[@resource-id="com.decodelab.amaderrel:id/btnAdd"]`
    noticeBoardBtnSelector = `//*[@resource-id="com.decodelab.amaderrel:id/btnNews"]`
    stationMapBtnSelector = `//*[@resource-id="com.decodelab.amaderrel:id/btnStationMap"]`
    numberBtnSelector = `//*[@resource-id="com.decodelab.amaderrel:id/btnImNumber"]`
    mobileTicketBtnSelector = `//*[@resource-id="com.decodelab.amaderrel:id/btnEtrain"]`
    subscribeBtnSelector = `//*[@resource-id="com.decodelab.amaderrel:id/txAdsOff"]`

    

    async isAppNameExist() {
        return await (await $(this.appNameTextSelector)).waitForExist({ timeout: 10000 })
    }

    async isNavigationDrawerExist() {
        return await (await $(this.navigationDrawerIconSelector)).waitForExist({ timeout: 10000 })
    }

    async isInfoUpdateMessageExist() {
        return await (await $(this.infoUpdateTextSelector)).isExisting()
    }

    async clickSyncButton() {
       await $(this.syncBtnSelector).click()
    }
    async clickSearchButton() {
       await $(this.searchBtnSelector).click()
    }
    async clickTrainTimeButton() {
        await $(this.timeBtnSelector).click()
    }
    async clickTicketPriceButton() {
        await $(this.priceBtnSelector).click()
    }
    async clickTrainTackingButton() {
       await $(this.trainTrackingBtnSelector).click()
    }
    async clickMobileTicketButton() {
        await $(this.mobileTicketBtnSelector).click()
    }
    async clickSubscribeButton() {
        await  $(this.subscribeBtnSelector).click()
    }


    async isSearchBoxDisplayed() {
        return await (await $(this.searchBtnSelector)).isDisplayed()
    }
    async isTrainTimeBoxDisplayed() {
        return await (await $(this.timeBtnSelector)).isDisplayed()
    }
    async isTicketPriceBoxDisplayed() {
        return await (await $(this.priceBtnSelector)).isDisplayed()
    }
    async isTrainTrackingBoxDisplayed() {
        return await (await $(this.trainTrackingBtnSelector)).isDisplayed()
    }
    async isTrackingLiveBoxDisplayed() {
        return await (await $(this.trackingLiveBtnSelector)).isDisplayed()
    }
    async isNoticeBoardBoxDisplayed() {
        return await (await $(this.noticeBoardBtnSelector)).isDisplayed()
    }
    async isStationMapBoxDisplayed() {
        return await (await $(this.stationMapBtnSelector)).isDisplayed()
    }
    async isNumberBoxDisplayed() {
        return await (await $(this.numberBtnSelector)).isDisplayed()
    }
    async isMobileTicketBoxDisplayed() {
        return await (await $(this.mobileTicketBtnSelector)).isDisplayed()
    }



}

module.exports = new HomeScreen();