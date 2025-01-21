/// <reference types="cypress" />
describe("login, Edit Save Data Template Type - Library", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Edit Save Template Type - Library", () => {
        cy.visit('/library')
        cy.editSaveTemplateTypeLibrary()
    })
 
})