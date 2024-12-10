/// <reference types="cypress" />
describe("login, Field Validation, Save - Template Types", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Field Validation - Template Types", () => {
        cy.visit('/administration')
        cy.fieldValidationTemplateType()
    })
    it("Save - Template Types", () => {
        cy.saveTemplateType()
    })
})