class sharedPage{
        clickCompanyInfoTab:string;
        clickLocationsTab:string
        saveBtn:string;
        addPopupVisible:string
        save:string
        saveAndNew:string
        saveAndClose:string;
        closeBtn:string
    constructor(){
        this.closeBtn='[aria-label="Close"]'
        this.saveAndClose='[aria-label="Save and Close"]'
        this.saveAndNew='[aria-label="Save and New"]'
        this.save='[aria-label="Save"]'
        this.clickCompanyInfoTab='//span[@class="dx-tab-text-span-pseudo" and text()="Company Info"]'
        this.clickLocationsTab='//span[@class="dx-tab-text-span-pseudo" and text()="Locations"]'
        this.saveBtn='//button[@type="button" and text()=" Save "]'
        this.addPopupVisible='[class="dx-overlay-content dx-popup-normal dx-popup-draggable dx-resizable dx-popup-flex-height"]'
    }
}
export default sharedPage;