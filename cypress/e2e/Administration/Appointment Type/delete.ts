/// <reference types="cypress" />
describe("login, Delete - Appointment Type", () => {
    it("login as a user", () => {
        cy.loginUI()
    })

    it("Delete Appointment Type", () => {
        cy.visit('/administration')
        cy.deleteAppointmentType()
    })
 
})