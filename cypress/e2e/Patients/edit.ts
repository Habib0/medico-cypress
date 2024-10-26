/// <reference types="cypress" />
describe("login, Edit Save Data - Patient", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Edit Save Patient", () => {
        cy.visit('/patients-management')
        cy.editPatient()
    })
 
})