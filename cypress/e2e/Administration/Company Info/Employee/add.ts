/// <reference types="cypress" />
describe("login, Field Validation, Save - Employee", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Field Validation Employee", () => {
        cy.visit('/administration')
        cy.fieldValidationEmployeeData()
    })
    it("Save Employee", () => {
        cy.saveEmployee()
    })
})