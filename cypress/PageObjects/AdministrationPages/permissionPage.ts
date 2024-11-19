import sharedPage from "../sharedPage";
class permissionPage extends sharedPage{
        clickPermissionTab:string;
        nameInput:string;
        nameIsRequired:string
        clickLocationType:string
        clickAddRoleBtn:string
    constructor(){
    super()
        this.clickAddRoleBtn='//button[@type="button" and text()=" New Role "]'
        this.nameIsRequired='//div[@class="dx-overlay-content dx-invalid-message-content" and text()="Name is required."]'
        this.clickPermissionTab='//span[@class="dx-tab-text-span-pseudo" and text()="Permissions"]'
        this.clickLocationType='//input[@name="locationId"]//parent::div//div[@class="dx-placeholder"]'
        this.nameInput='[name="name"]'
    }
}
export default permissionPage;