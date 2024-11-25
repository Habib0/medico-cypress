/// <reference types="cypress" />
describe("login, Field Validation, Save - Selectable List", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Field Validation - Selectable List", () => {
        cy.visit('/administration')
        cy.fieldValidationSelectableList()
    })
    it("Save - Selectable List", () => {
        cy.saveSelectableList()
    })
})