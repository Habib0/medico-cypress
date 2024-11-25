/// <reference types="cypress" />
describe("login, Delete - Selectable List Categories", () => {
    it("login as a user", () => {
        cy.loginUI()
    })

    it("Delete - Selectable List Categories", () => {
        cy.visit('/administration')
        cy.deleteSelectableListCategories()
    })
 
})