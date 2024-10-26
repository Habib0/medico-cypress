/// <reference types="cypress" />
describe("login, Field Validation, Save - Patients", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Field Validation Patients", () => {
        cy.visit('/patients-management')
        cy.fieldValidationPatientData()
    })
    it("Save Patients", () => {
        cy.savePatients()
    })
})