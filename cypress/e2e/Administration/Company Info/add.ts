/// <reference types="cypress" />
describe("login, Save Company Info - Medico", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Save Company Info", () => {
        cy.visit('/administration')
        cy.companyInfoCMD()
    })
 
})