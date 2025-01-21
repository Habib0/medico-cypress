/// <reference types="cypress" />
describe("login, Edit Save Data - Phrases", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Edit Save - Phrases", () => {
        cy.visit('/administration')
        cy.editSavePhrases()
    })
 
})