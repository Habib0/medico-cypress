/// <reference types="cypress" />
describe("login, Field Validation, Save - Selectable List Library", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Field Validation - Selectable List Library", () => {
        cy.visit('/library')
        cy.fieldValidationSelectableListLibrary()
    })
    it("Save - Selectable List Library", () => {
        cy.saveSelectableListLibrary()
    })
})