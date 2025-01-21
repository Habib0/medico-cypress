import sharedPage from "./../sharedPage";
class patientOrdersPage extends sharedPage{
        clickNewOrderBtn:string;
        notesInput:string;
        clickPhysician:string;
        selectPhysician:string;
        clickStatus:string;
        clickInsurance:string;
        clickPatient:string;
        clickPriority:string;
        selectStatus:string;
        selectPriority:string;
        selectPatient:string;
        selectInsurance:string;
        clickNotifyBtn:string;
        selectNotify:string;
        clickAddItem:string;
        clickLabTest:string;
    constructor(){
        super()
            this.clickLabTest='//span[@class="dx-field-item-label-text" and text()="Lab Test"]'
            this.selectNotify='//div[@class="dx-item-content dx-list-item-content" and text()="Melissa Kunsman"]'
            this.clickNotifyBtn='//select[@name="userId"]//parent::div//div[@class="dx-placeholder"]'
            this.selectInsurance='//div[@class="dx-item-content dx-list-item-content" and text()="Test Insurance"]'
            this.selectPatient='//div[@class="dx-item-content dx-list-item-content" and text()="Test Patient"]'
            this.selectPriority='//div[@class="dx-item-content dx-list-item-content" and text()="High"]'
            this.selectStatus='//div[@class="dx-item-content dx-list-item-content" and text()="Read"]'
            this.clickPriority='//input[@name="priority"]//parent::div//div[@class="dx-button-content"]'
            this.clickPatient='//input[@name="patientId"]//parent::div//div[@class="dx-button-content"]'
            this.clickInsurance='//input[@name="insuranceId"]//parent::div//div[@class="dx-button-content"]'
            this.clickStatus='//input[@name="status"]//parent::div//div[@class="dx-button-content"]'
            this.selectPhysician='//div[@class="dx-item-content dx-list-item-content" and text()="Glenn Kunsman"]'
            this.clickPhysician='//input[@name="physicianId"]//parent::div//div[@class="dx-button-content"]'
            this.clickNewOrderBtn='//button[@type="button" and text()=" New Order "]'
            this.clickAddItem='//button[@type="button" and text()=" Add Item "]'
            this.notesInput='[name="notes"]'
    }
}

export default patientOrdersPage;