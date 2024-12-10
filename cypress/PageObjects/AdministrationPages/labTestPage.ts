import sharedPage from "../sharedPage";
class labTestPage extends sharedPage{
        clickNewLabTestBtn:string
        sectionInput:string
        codeTypeInput:string
        codeInput:string
        codeDescInput:string;
        testFeeInput:string
        categoryClick:string;
        selectCategory:string
        clickVendor:string
        selectVendors:string
        inputEditor:string;
        noteEditor:string
    constructor(){
        super()
        this.noteEditor='[aria-label="Editor content"]'
        this.inputEditor='[aria-label="Editor content"]'
        this.clickVendor='//input[@name="vendorId"]//parent::div//div[@class="dx-button-content"]'
        this.selectVendors='//div[@class="dx-item-content dx-list-item-content" and text()="Usama"]'
        this.selectCategory='//div[@class="dx-item-content dx-list-item-content" and text()="Imaging MRI"]'
        this.categoryClick='//input[@name="category"]//parent::div//div[@class="dx-button-content"]'
        this.testFeeInput='//input[@name="testFee"]//parent::div//input[@class="dx-texteditor-input"]'
        this.codeDescInput='[name="code_Desc"]'
        this.codeInput='[name="code"]'
        this.codeTypeInput='[name="codeType"]'
        this.sectionInput='[name="section"]'
        this.clickNewLabTestBtn='//button[@type="button" and text()=" New Test "]'
    }
}
export default labTestPage;