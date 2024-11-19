import sharedPage from "./sharedPage";
class companiesPage extends sharedPage{
        clickAddNewCompanyBtn:string;
        nameInput:string;
        lastName:string;
        middleName:string
        emailInput:string;
        caseNoInput:string
        cityInput:string
        primaryAddressInput:string
        secondryAddressInput:string;
        zipInput:string
        nameIsRequired:string
        clickCommunicationMethod:string
        clickSuffix:string
        phoneInput:string;
        secondryPhone:string
        clickDob:string;
        clickGender:string
        rqidInput:string
        clickMaritalStatus:string
        ssnInput:string;
        clickState:string
    constructor(){
    super()
        this.clickState='//input[@name="state"]//parent::div//div[@class="dx-button-content"]'
        this.ssnInput='//input[@name="ssn"]//parent::div//div//input'
        this.clickMaritalStatus='//input[@name="maritalStatus"]//parent::div//div[@class="dx-button-content"]'
        this.rqidInput='[name="rqid"]'
        this.clickGender='//input[@name="gender"]//parent::div//div[@class="dx-button-content"]'
        this.clickDob='//input[@name="dateOfBirth"]//parent::div//div[@class="dx-button-content"]'
        this.secondryPhone='//input[@name="secondaryPhone"]//parent::div//input[@type="text"]'
        this.phoneInput='//input[@name="phone"]//parent::div//input[@type="text"]'
        this.clickSuffix='//input[@name="nameSuffix"]//parent::div//div[@class="dx-placeholder"]'
        this.nameIsRequired='//div[@class="dx-overlay-content dx-invalid-message-content" and text()="Name is required."]'
        this.clickAddNewCompanyBtn='//button[@type="button" and text()=" New Company "]'
        this.clickCommunicationMethod='//*[@name="selectedPatientCommunicationMethods"]//parent::div//div[@class="dx-placeholder"]'
        this.nameInput='[name="name"]'
        this.emailInput='[name="email"]'
        this.caseNoInput='[name="fin"]'
        this.cityInput='[name="city"]'
        this.primaryAddressInput='[name="address"]'
        this.secondryAddressInput='[name="secondaryAddress"]'
        this.zipInput='[name="zipCode"]'
    }
}
export default companiesPage;