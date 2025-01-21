import libraryPage from "../../PageObjects/LibraryPages/libraryPage";
const libraryObject = new libraryPage();

Cypress.Commands.add("fieldValidationSelectableCategoriesLibrary",()=>{
    cy.xpath(libraryObject.clickSelectableCategoriesTab).click({force:true})
    cy.xpath(libraryObject.clickAddNewLibrary).click({force:true})
    cy.xpath(libraryObject.saveBtn).click({force:true})
    cy.get('[class="dx-show-invalid-badge dx-textbox dx-texteditor dx-editor-outlined dx-texteditor-empty dx-widget dx-validator dx-visibility-change-handler dx-invalid"]')
    .should('be.visible')
})

Cypress.Commands.add("saveSelectableCategoriesLibrary",()=>{
    cy.get(libraryObject.titleInput).type('automation library')
    cy.xpath(libraryObject.saveBtn).click({force:true})
    cy.intercept('api/library-selectable-list-categories/dx/grid*').as('getGridList')
    cy.get(libraryObject.closeBtn).click({force:true})
    cy.wait('@getGridList')
})

Cypress.Commands.add("editSelectableCategoriesLibrary",()=>{
    cy.xpath(libraryObject.clickSelectableCategoriesTab).click({force:true})
    cy.get(libraryObject.gridSearch).clear().type('automation library')
    cy.waitForGenericLoader()
    cy.wait(3000)
    cy.get(libraryObject.btnEdit).eq(0).click({force:true})
    // cy.get(libraryObject.addPopupVisible).should('be.visible')
    cy.get(libraryObject.titleInput).clear().type('Edit Automation library')
    cy.xpath(libraryObject.saveBtn).click({force:true})
})
Cypress.Commands.add("deleteSelectableCategoriesLibrary",()=>{
    cy.xpath(libraryObject.clickSelectableCategoriesTab).click({force:true})
        cy.get(libraryObject.gridSearch).clear().type('Automation library')
        cy.waitForGenericLoader().wait(2000)
        cy.get(libraryObject.btnDelete).eq(0).click({force:true})
        cy.xpath(libraryObject.confirmationPopup).should('be.visible')
        cy.get(libraryObject.btnYes).click({force:true})
        cy.waitForGenericLoader()
})
