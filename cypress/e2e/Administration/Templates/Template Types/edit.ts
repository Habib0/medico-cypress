/// <reference types="cypress" />
describe("login, Edit Save Data - Template Types", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Edit Save - Template Types", () => {
        cy.visit('/administration')
        cy.editSaveTemplateType()
    })
 
})