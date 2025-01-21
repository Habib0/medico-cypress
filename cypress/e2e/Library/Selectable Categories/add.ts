/// <reference types="cypress" />
describe("login, Field Validation, Save Selectable Categories - Library", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Field Validation Selectable Categories - Library", () => {
        cy.visit('/library')
        cy.fieldValidationSelectableCategoriesLibrary()
    })
    it("Save Selectable Categories - Library", () => {
        cy.saveSelectableCategoriesLibrary()
    })
 
})