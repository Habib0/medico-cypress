/// <reference types="cypress" />
describe("login, Field Validation, Save - Insurance Companies", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Field Validation Insurance Companies", () => {
        cy.visit('/administration')
        cy.fieldValidationInsuranceData()
    })
    it("Save Insurance Companies", () => {
        cy.saveInsuranceData()
    })
 
})