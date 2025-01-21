/// <reference types="cypress" />
describe("login, Delete Selectable Categories - Library", () => {
    it("login as a user", () => {
        cy.loginUI()
    })

    it("Delete Selectable Categories - Library", () => {
        cy.visit('/library')
        cy.deleteSelectableCategoriesLibrary()
    })
 
})