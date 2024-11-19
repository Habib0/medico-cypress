/// <reference types="cypress" />
describe("login, Edit Save Data - Companies", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Edit Save Companies", () => {
        // cy.visit('/companies-management')
        cy.editCompanies()
    })
 
})