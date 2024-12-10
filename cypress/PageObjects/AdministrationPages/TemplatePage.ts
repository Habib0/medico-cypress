import { timers } from "cypress/types/jquery";
import sharedPage from "../sharedPage";
class TemplatePage extends sharedPage{
        clickSelectableListCategoriesTab:string;
        clickSelectableListTab:string
        clickTemplateTypesTab:string
        clickNewBtnCategory:string
        titleInput:string
        clickNewBtnList:string
        clickCategroyList:string;
        clickNewTemplateTypeBtn:string
    constructor(){
    super()
        this.clickNewTemplateTypeBtn='//button[@type="button" and text()=" New Type "]'
        this.clickCategroyList='//input[@name="categoryId"]//parent::div//div[@class="dx-button-content"]'
        this.titleInput='[name="title"]'
        this.clickNewBtnList='//button[@type="button" and text()=" New List "]'
        this.clickNewBtnCategory='//button[@type="button" and text()=" New Category "]'
        this.clickTemplateTypesTab='//span[@class="dx-tab-text-span-pseudo" and text()="Template Types"]'
        this.clickSelectableListTab='//span[@class="dx-tab-text-span-pseudo" and text()="Selectable Lists"]'
        this.clickSelectableListCategoriesTab='//span[@class="dx-tab-text-span-pseudo" and text()="Selectable List Categories"]'
    }
}
export default TemplatePage;