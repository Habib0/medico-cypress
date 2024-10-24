class sharedPage{
        clickCompanyInfoTab:string;
        clickLocationsTab:string;
        clickRoomsTab:string
        saveBtn:string;
        addPopupVisible:string
        save:string
        saveAndNew:string
        saveAndClose:string;
        closeBtn:string;
        btnEdit:string
        btnDelete:string;
        btnYes:string;
        btnNo:string;
        gridSearch:string
        loader:string;
        confirmationPopup:string
        clickActive:string
    constructor(){
        this.clickActive='[aria-label="OFF"]'
        this.confirmationPopup='//div[@class="dx-item-content dx-toolbar-item-content"]//div[text()="Confirmation"]'
        this.loader = '[class="dx-loadpanel-content-wrapper"]';
        this.gridSearch='[aria-label="Search in the data grid"]'
        this.btnNo='[aria-label="No"]'
        this.btnYes='[aria-label="Yes"]'
        this.btnDelete='[title="Delete"]'
        this.btnEdit='[title="Edit"]'
        this.closeBtn='[aria-label="Close"]'
        this.saveAndClose='[aria-label="Save and Close"]'
        this.saveAndNew='[aria-label="Save and New"]'
        this.save='[aria-label="Save"]'
        this.clickCompanyInfoTab='//span[@class="dx-tab-text-span-pseudo" and text()="Company Info"]'
        this.clickLocationsTab='//span[@class="dx-tab-text-span-pseudo" and text()="Locations"]'
        this.clickRoomsTab='//span[@class="dx-tab-text-span-pseudo" and text()="Rooms"]'
        this.saveBtn='//button[@type="button" and text()=" Save "]'
        this.addPopupVisible='[class="dx-overlay-content dx-popup-normal dx-popup-draggable dx-resizable dx-popup-flex-height"]'
    }
}
export default sharedPage;