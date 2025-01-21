import libraryPage from "../../PageObjects/LibraryPages/libraryPage";
const libraryObject = new libraryPage();

Cypress.Commands.add("fieldValidationTemplateTypeLibrary",()=>{
    // cy.xpath(libraryObject.clickLibraryTab).click({force:true})
    cy.xpath(libraryObject.clickTemplateTab).click({force:true})
    cy.xpath(libraryObject.clickAddNewBtnType).click({force:true})
    cy.xpath(libraryObject.saveBtn).click({force:true})
    cy.get('[class="dx-show-invalid-badge dx-textbox dx-texteditor dx-editor-outlined dx-texteditor-empty dx-widget dx-validator dx-visibility-change-handler dx-invalid"]')
    .should('be.visible')
})

Cypress.Commands.add("saveTemplateTypeLibrary",()=>{
    cy.get(libraryObject.titleInput).type('automation template type')
    cy.xpath(libraryObject.saveBtn).click({force:true})
    cy.intercept('api/library-template-types/dx/grid*').as('getGridList')
    cy.get(libraryObject.closeBtn).click({force:true})
    cy.wait('@getGridList')
})

Cypress.Commands.add("editSaveTemplateTypeLibrary",()=>{
    cy.xpath(libraryObject.clickTemplateTab).click({force:true})
    cy.get(libraryObject.gridSearch).clear().type('automation template type')
    cy.waitForGenericLoader()
    cy.wait(3000)
    cy.get(libraryObject.btnEdit).eq(0).click({force:true})
    // cy.get(libraryObject.addPopupVisible).should('be.visible')
    cy.get(libraryObject.titleInput).clear().type('Edit automation template type')
    cy.xpath('//button[@class="btn btn-md btn-outline-secondary" and text()=" Save "]').click({force:true})
})
Cypress.Commands.add("deleteTemplateTypeLibrary",()=>{
    cy.xpath(libraryObject.clickTemplateTab).click({force:true})
        cy.get(libraryObject.gridSearch).clear().type('automation template type')
        cy.waitForGenericLoader().wait(2000)
        cy.get(libraryObject.btnDelete).eq(0).click({force:true})
        cy.xpath(libraryObject.confirmationPopup).should('be.visible')
        cy.get(libraryObject.btnYes).click({force:true})
        cy.waitForGenericLoader()
})