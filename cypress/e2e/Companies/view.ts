/// <reference types="cypress" />
describe("login, View Company Info - Companies", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("View Company Info - Companies", () => {
        cy.visit('/companies-management')
        cy.viewCompanyInfo()
    })
 
})