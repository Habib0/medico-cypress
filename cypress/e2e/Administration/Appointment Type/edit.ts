/// <reference types="cypress" />
describe("login, Edit Save Data - Appointment Type", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Edit Save Appointment Type", () => {
        cy.visit('/administration')
        cy.editAppointmentType()
    })
 
})