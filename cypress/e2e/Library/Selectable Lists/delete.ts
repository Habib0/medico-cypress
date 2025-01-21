/// <reference types="cypress" />
describe("login, Delete - Selectable List Library", () => {
    it("login as a user", () => {
        cy.loginUI()
    })

    it("Delete - Selectable List Library", () => {
        cy.visit('/library')
        cy.deleteSelectableListLibrary()
    })
 
})