import { timers } from "cypress/types/jquery";
import sharedPage from "../sharedPage";
class TemplatePage extends sharedPage{
        clickSelectableListCategoriesTab:string;
        clickSelectableListTab:string
        clickTemplateTypesTab:string
    constructor(){
    super()
        this.clickTemplateTypesTab='//span[@class="dx-tab-text-span-pseudo" and text()="Template Types"]'
        this.clickSelectableListTab='//span[@class="dx-tab-text-span-pseudo" and text()="Selectable Lists"]'
        this.clickSelectableListCategoriesTab='//span[@class="dx-tab-text-span-pseudo" and text()="Selectable List Categories"]'
    }
}
export default TemplatePage;