/// <reference types="cypress" />
describe("login, Edit Save Data Selectable categories - Library", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Edit Save Selectable categories - Library", () => {
        cy.visit('/library')
        cy.editSelectableCategoriesLibrary()
    })
 
})