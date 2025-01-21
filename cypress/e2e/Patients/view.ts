/// <reference types="cypress" />
describe("login, View Data - Patient", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("View Patient", () => {
        cy.visit('/patients-management')
        cy.viewPatient()
    })
 
})