/// <reference types="cypress" />
describe("login, Field Validation, Save - Companies", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Field Validation Companies", () => {
        // cy.visit('/companies-management')
        cy.fieldValidationCompaniesData()
    })
    it("Save Companies", () => {
        cy.saveCompanies()
    })
})