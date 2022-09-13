class SMSSystemRulesScreen{

    stepImageViewSelector=`//*[@resource-id="com.decodelab.amaderrel:id/imageView1"]`

    async isStepImageExist(){
        return await $(this.stepImageViewSelector).isExisting()
    }
}

module.exports = new SMSSystemRulesScreen()