/// <reference types="cypress" />
describe("login, Field Validation, Save - Selectable List Categories", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Field Validation - Selectable List Categories", () => {
        cy.visit('/administration')
        cy.fieldValidationSelectableListCategories()
    })
    it("Save - Selectable List Categories", () => {
        cy.saveSelectableListCategories()
    })
})