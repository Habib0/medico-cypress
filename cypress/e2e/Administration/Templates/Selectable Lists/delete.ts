/// <reference types="cypress" />
describe("login, Delete - Selectable List", () => {
    it("login as a user", () => {
        cy.loginUI()
    })

    it("Delete - Selectable List", () => {
        cy.visit('/administration')
        cy.deleteSelectableList()
    })
 
})