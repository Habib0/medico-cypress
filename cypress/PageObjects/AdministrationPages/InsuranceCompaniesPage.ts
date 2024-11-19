import { timers } from "cypress/types/jquery";
import sharedPage from "../sharedPage";
class InsuranceCompaniesPage extends sharedPage{
        clickAddNewInsuranceCompanyBtn:string;
        nameInput:string;
        nameIsRequired:string
        clickLocationType:string
        clickInsuranceTab:string
        inputPrayerId:string
        inputCpCode:string
        clickActiveDate:string
        selectTodayDate:string
    constructor(){
    super()
        this.selectTodayDate='[class="dx-calendar-cell dx-calendar-today dx-calendar-contoured-date"]'
        this.clickActiveDate='//input[@name="activeDate"]//parent::div//div[@class="dx-button-content"]'
        this.inputCpCode='[name="cpid"]'
        this.inputPrayerId='[name="payerId"]'
        this.clickInsuranceTab='//li[@aria-label="Insurance Companies"]//div[@class="dx-item-content dx-treeview-item-content"]//span[text()="Insurance Companies"]'
        this.nameIsRequired='//div[@class="dx-overlay-content dx-invalid-message-content" and text()="Name is required."]'
        this.clickAddNewInsuranceCompanyBtn='//button[@type="button" and text()=" New Company "]'
        this.clickLocationType='//input[@name="locationId"]//parent::div//div[@class="dx-placeholder"]'
        this.nameInput='[name="name"]'
    }
}
export default InsuranceCompaniesPage;