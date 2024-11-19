import sharedPage from "../sharedPage";
class employeePage extends sharedPage{
        clickAddNewEmployeeBtn:string;
        firstName:string;
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
        primaryPhone:string;
        secondryPhone:string
        clickDob:string;
        clickGender:string
        rqidInput:string
        clickMaritalStatus:string
        ssnInput:string;
        clickState:string;
        clickEmployeeType:string;
        selectEmployeeType:string
        clickRole:string
        selectRole:string
    constructor(){
    super()
        this.selectRole='//div[@class="dx-item-content dx-list-item-content" and contains(text(), "Doctor")]'
        this.clickRole='//span[@class="dx-field-item-label-text" and contains(text(), "Role")]'
        this.selectEmployeeType='//div[@aria-label="Items"]//div[text()="Physician"]'
        this.clickEmployeeType='//span[@class="dx-field-item-label-text" and contains(text(), "Employee Type")]'
        this.clickState='//input[@name="state"]//parent::div//div[@class="dx-button-content"]'
        this.ssnInput='//input[@name="ssn"]//parent::div//div//input'
        this.clickMaritalStatus='//input[@name="maritalStatusId"]//parent::div//div[@class="dx-button-content"]'
        this.rqidInput='[name="rqid"]'
        this.clickGender='//input[@name="gender"]//parent::div//div[@class="dx-button-content"]'
        this.clickDob='//input[@name="dateOfBirth"]//parent::div//div[@class="dx-button-content"]'
        this.secondryPhone='//input[@name="secondaryPhone"]//parent::div//input[@type="text"]'
        this.primaryPhone='//input[@name="primaryPhone"]//parent::div//input[@type="text"]'
        this.clickSuffix='//input[@name="nameSuffix"]//parent::div//div[@class="dx-placeholder"]'
        this.nameIsRequired='//div[@class="dx-overlay-content dx-invalid-message-content" and text()="Name is required."]'
        this.clickAddNewEmployeeBtn='//button[@type="button" and text()=" New Employee "]'
        this.clickCommunicationMethod='//*[@name="selectedPatientCommunicationMethods"]//parent::div//div[@class="dx-placeholder"]'
        this.firstName='[name="firstName"]'
        this.lastName='[name="lastName"]'
        this.middleName='[name="middleName"]'
        this.emailInput='[name="email"]'
        this.caseNoInput='[name="fin"]'
        this.cityInput='[name="city"]'
        this.primaryAddressInput='[name="address"]'
        this.secondryAddressInput='[name="secondaryAddress"]'
        this.zipInput='[name="zip"]'

    }
}
export default employeePage;