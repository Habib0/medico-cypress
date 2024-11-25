/// <reference types="cypress" />
describe("login, Edit Save Data - Selectable List", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Edit Save - Selectable List", () => {
        cy.visit('/administration')
        cy.editSaveSelectableList()
    })
 
})