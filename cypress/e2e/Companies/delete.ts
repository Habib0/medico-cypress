/// <reference types="cypress" />
describe("login, Delete - Companies", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Delete - Companies", () => {
        cy.visit('/companies-management')
        cy.deleteCompanies()
    })
 
})