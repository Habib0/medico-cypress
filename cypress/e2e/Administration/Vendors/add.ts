/// <reference types="cypress" />
describe("login, Field Validation, Save - Vendors", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Field Validation Vendors", () => {
        cy.visit('/administration')
        cy.fieldValidationVendors()
    })
    it("Save Vendors", () => {
        cy.saveVendors()
    })
 
})