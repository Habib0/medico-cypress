/// <reference types="cypress" />
describe("login, Field Validation, Save - phrases", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Field Validation - phrases", () => {
        cy.visit('/administration')
        cy.fieldValidationPhrases()
    })
    it("Save - phrases", () => {
        cy.savePhrases()
    })
})