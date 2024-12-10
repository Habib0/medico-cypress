/// <reference types="cypress" />
describe("login, Delete - Template Types", () => {
    it("login as a user", () => {
        cy.loginUI()
    })

    it("Delete - Template Types", () => {
        cy.visit('/administration')
        cy.deleteTemplateType()
    })
 
})