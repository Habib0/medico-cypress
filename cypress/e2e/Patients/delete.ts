/// <reference types="cypress" />
describe("login, Delete - Patient", () => {
    it("login as a user", () => {
        cy.loginUI()
    })

    it("Delete Patient", () => {
        cy.visit('/patients-management')
        cy.deletePatient()
    })
 
})