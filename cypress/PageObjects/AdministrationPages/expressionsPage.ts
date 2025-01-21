import sharedPage from "../sharedPage"
class expressionsPage extends sharedPage{

        clickExpressionTab: string;
        clickReferenceTableTab: string;
        clickExpressionBuilderTab: string;
        clickSync: string;
    constructor(){
        super()
        this.clickExpressionTab='//li[@aria-label="Expressions"]//parent::div//span'
        this.clickReferenceTableTab='//span[@class="dx-tab-text-span-pseudo" and text()="Reference tables"]'
        this.clickExpressionBuilderTab='//span[@class="dx-tab-text-span-pseudo" and text()="Expressions builder"]'
        this.clickSync='[class="fas fa-sync"]'
    }


}