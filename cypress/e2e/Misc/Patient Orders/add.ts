/// <reference types="cypress" />
describe("login, Field Validation, Save - Patient Orders", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Field Validation Patient Orders", () => {
        cy.visit('/lab-orders')
        cy.fieldValidationPatientOrders()
    })
    it("Save Patients", () => {
        cy.savePatientOrders()
    })
})