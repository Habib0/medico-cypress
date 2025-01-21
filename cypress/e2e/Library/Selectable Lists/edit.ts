/// <reference types="cypress" />
describe("login, Edit Save Data - Selectable List Library", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Edit Save - Selectable List Library", () => {
        cy.visit('/library')
        cy.editSaveSelectableListLibrary()
    })
 
})