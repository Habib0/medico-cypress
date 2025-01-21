/// <reference types="cypress" />
describe("login, Delete Template Type - Library", () => {
    it("login as a user", () => {
        cy.loginUI()
    })

    it("Delete Template Type - Library", () => {
        cy.visit('/library')
        cy.deleteTemplateTypeLibrary()
    })
 
})