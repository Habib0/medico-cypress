import { timers } from "cypress/types/jquery";
import sharedPage from "../sharedPage";
class locationsPage extends sharedPage{

        clickAddNewLocationBtn:string;
        nameInput:string;
        addressInput:string
        secondryAddressInput:string;
        cityInput:string;
        zipInput:string;
        inputPhoneXpath:string;
        inputFaxXpath:string;
        letterCodeInput:string;
        clickActive:string;
        nameIsRequired:string
    constructor(){
    super()
        this.nameIsRequired='//div[@class="dx-overlay-content dx-invalid-message-content" and text()="Name is required."]'
        this.inputFaxXpath='//input[@name="fax"]//parent::div//div//input'
        this.clickAddNewLocationBtn='//button[@type="button" and text()=" New Location "]'
        this.nameInput='[name="name"]'
        this.addressInput='[name="address"]'
        this.secondryAddressInput='[name="secondaryAddress"]'
        this.cityInput='[name="city"]'
        this.zipInput='[name="zip"]'
        this.inputPhoneXpath='//input[@name="phone"]//parent::div//div//input'
        this.letterCodeInput='[name="locationCode"]'
        this.clickActive='[aria-label="OFF"]'
    }
}
export default locationsPage;