/// <reference types="cypress" />
describe("login, Edit Save Data - Selectable List Categories", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Edit Save - Selectable List Categories", () => {
        cy.visit('/administration')
        cy.editSaveSelectableListCategories()
    })
 
})