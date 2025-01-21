/// <reference types="cypress" />
describe("login, Field Validation, Save Template Type - Library", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Field Validation Template Type - Library", () => {
        cy.visit('/library')
        cy.fieldValidationTemplateTypeLibrary()
    })
    it("Save Template Type - Library", () => {
        cy.saveTemplateTypeLibrary()
    })
 
})