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
        clickNewTemplateTypeBtn:string;
        clickNewPhrasesBtn:string;
        clickPhrasesTab:string;
        clickBasicInfoTab:string;
        clickContentTab:string;
        clickPhraseCategory:string;
        selectPhraseCategory:string;
        clickPlusBtn:string;
        editorContent:string;
        inputCategoryName:string;   
    constructor(){
    super()
        this.titleInput='[name="title"]'

        this.clickNewTemplateTypeBtn='//button[@type="button" and text()=" New Type "]'
        this.clickNewPhrasesBtn='//button[@type="button" and text()=" New Phrase "]'
        this.clickCategroyList='//input[@name="categoryId"]//parent::div//div[@class="dx-button-content"]'
        this.clickPhraseCategory='//input[@name="phraseCategoryId"]//parent::div//div[@class="dx-button-content"]'
        this.selectPhraseCategory='//div[@class="dx-item-content dx-list-item-content" and text()="HPI"]'
        this.clickPlusBtn='[aria-label="plus"]'
        this.editorContent='[id="tinymce"]'
        this.inputCategoryName='[name="categoryName"]'
        this.titleInput='[name="title"]'
        this.clickNewBtnList='//button[@type="button" and text()=" New List "]'
        this.clickNewBtnCategory='//button[@type="button" and text()=" New Category "]'
        this.clickTemplateTypesTab='//span[@class="dx-tab-text-span-pseudo" and text()="Template Types"]'
        this.clickSelectableListTab='//span[@class="dx-tab-text-span-pseudo" and text()="Selectable Lists"]'
        this.clickPhrasesTab='//span[@class="dx-tab-text-span-pseudo" and text()="Phrases"]'
        this.clickBasicInfoTab='//span[@class="dx-tab-text-span-pseudo" and text()="Basic Info"]'
        this.clickContentTab='//span[@class="dx-tab-text-span-pseudo" and text()="Content"]'
        this.clickSelectableListCategoriesTab='//span[@class="dx-tab-text-span-pseudo" and text()="Selectable List Categories"]'
    }
}
export default TemplatePage;