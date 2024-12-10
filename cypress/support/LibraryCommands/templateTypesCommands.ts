import libraryPage from "../../PageObjects/LibraryPages/libraryPage";
const libraryObject = new libraryPage();

Cypress.Commands.add("fieldValidationTemplateType",()=>{
    cy.xpath(libraryObject.clickLibraryTab).click({force:true})
    cy.xpath(libraryObject.clickTemplateTab).click({force:true})
    cy.xpath(libraryObject.clickAddNewBtnType).click({force:true})
    
})

Cypress.Commands.add("saveTemplateType",()=>{
    
})

Cypress.Commands.add("editSaveTemplateType",()=>{
    
})
Cypress.Commands.add("deleteTemplateType",()=>{
    
})