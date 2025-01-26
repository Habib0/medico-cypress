/// <reference types="cypress" />
describe("login, Field Validation, Save - Business Hours", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Field Validation Business Hours", () => {
        cy.visit('/administration')
        cy.fieldValidationBusinessHour()
    })
    it("Save Business Hours", () => {
        cy.saveBusinessHour()
    })
 
})