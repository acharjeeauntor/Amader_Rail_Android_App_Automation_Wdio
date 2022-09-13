class TrainStopageStationListScreen{
    stopageTitleTextSelector=`//*[@text="যাত্রা বিরতির স্টেশন"]`



    async isStopageTitleExist(){
        return await $(this.stopageTitleTextSelector).isExisting()
    }
}

module.exports = new TrainStopageStationListScreen()