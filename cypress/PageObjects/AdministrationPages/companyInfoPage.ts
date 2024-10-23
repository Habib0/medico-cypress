import { times } from "cypress/types/lodash";
import sharedPage from "../sharedPage";
class companyInfoPage extends sharedPage{
        clickStateDD:string
        itemList:string
        findStateDiv:string;
        clickServiceType:string
    constructor(){
    super()
        this.findStateDiv='[class="dx-item-content dx-list-item-content"]'
        this.itemList='[aria-label="Items"]'
        this.clickStateDD='//input[@name="state"]//parent::div//div[@class="dx-placeholder"]'
        this.clickServiceType='//input[@name="serviceType"]//parent::div//div[@class="dx-placeholder"]'

    }
}
export default companyInfoPage;