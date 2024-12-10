/// <reference types="cypress" />
describe("login, Field Validation, Save - Lab Test", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Field Validation Lab Test", () => {
        cy.visit('/administration')
        cy.fieldValidationLabTest()
    })
    it("Save Lab Test", () => {
        cy.saveLabTest()
    })
 
})