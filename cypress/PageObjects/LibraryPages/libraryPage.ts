import sharedPage from "../sharedPage";
class libraryPage extends sharedPage{

        clickTemplateTypeTab:string
        clickAddNewBtnType:string
        titleInput:string
        clickAddNewLibrary:string
        clickSelectableListTab:string
        clickSelectableCategoriesTab:string
    constructor(){
        super()
        this.clickSelectableCategoriesTab='//li[@aria-label="Selectable Categories"]//div//span'
        this.clickSelectableListTab='//li[@aria-label="Selectable Lists"]//div//span'
        this.clickAddNewLibrary='//button[@type="button" and text()=" New Category "]'
        this.titleInput='[name="title"]'
        this.clickAddNewBtnType='//button[@type="button" and text()=" New Type "]'
        this.clickTemplateTab='//li[@aria-label="Template Types"]//div//span'

    }

}
export default libraryPage;
