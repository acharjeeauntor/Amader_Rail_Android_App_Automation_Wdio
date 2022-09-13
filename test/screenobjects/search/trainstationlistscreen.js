class TrainStationListScreen{
    firstTransectionXpath = `/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout`


    async clickFirstStationTransection() {
        await $(this.firstTransectionXpath).click()
    }

}

module.exports = new TrainStationListScreen()