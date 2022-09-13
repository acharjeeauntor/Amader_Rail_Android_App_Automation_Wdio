
class RegisterScreen {

    appLogoSelector=`//*[@resource-id="com.decodelab.amaderrel:id/imageView6"]`
    nameInputSelector=`//*[@resource-id="com.decodelab.amaderrel:id/txName1"]`
    phoneNumberInputSelector=`//*[@resource-id="com.decodelab.amaderrel:id/txPhone1"]`
    emailInputSelector=`//*[@resource-id="com.decodelab.amaderrel:id/txJerseySize1"]`
    districtDropDownSelector=`//*[@resource-id="com.decodelab.amaderrel:id/txTeamName1"]`
    submitBtnSelector=`//*[@resource-id="com.decodelab.amaderrel:id/btnSave"]`
    skipRegistrationBtnSelector=`//*[@resource-id="com.decodelab.amaderrel:id/btnSave1"]`


    async isAppLogoExist(){
       return await (await $(this.appLogoSelector)).isExisting()
    }

    async enterName(name){
        await (await $(this.nameInputSelector)).setValue(name)
    }
    async enterPhoneNumber(number){
        await (await $(this.phoneNumberInputSelector)).setValue(number)
    }
    async enterEmail(email){
        await (await $(this.emailInputSelector)).setValue(email)
    }
    async selectDistrict(districtName){
        await (await $(this.districtDropDownSelector)).click()
        await (await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${districtName}")`)).click()
    }
    async clickSubmitBtn(){
        await (await $(this.submitBtnSelector)).click()
    }
    async clickSkipRegistrationBtn(){
        await (await $(this.skipRegistrationBtnSelector)).click()
    }

}

module.exports = new RegisterScreen();
