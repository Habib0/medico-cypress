/// <reference types="cypress" />
describe("login, Field Validation, Save - Appointment Type", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Field Validation Appointment Type", () => {
        cy.visit('/administration')
        cy.fieldValidationAppointmentType()
    })
    it("Save Appointment Type", () => {
        cy.saveAppointmentType()
    })
 
})