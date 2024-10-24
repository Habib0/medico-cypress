import { timers } from "cypress/types/jquery";
import sharedPage from "../sharedPage";
class roomPage extends sharedPage{
        clickAddNewRoomBtn:string;
        nameInput:string;
        nameIsRequired:string
        clickLocationType:string
    constructor(){
    super()
        this.nameIsRequired='//div[@class="dx-overlay-content dx-invalid-message-content" and text()="Name is required."]'
        this.clickAddNewRoomBtn='//button[@type="button" and text()=" New Room "]'
        this.clickLocationType='//input[@name="locationId"]//parent::div//div[@class="dx-placeholder"]'
        this.nameInput='[name="name"]'
    }
}
export default roomPage;