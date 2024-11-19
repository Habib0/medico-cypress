/// <reference types="cypress" />
describe("login, Edit Save Data - Employee", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Edit Save Employee", () => {
        // cy.visit('')
        cy.visit('/administration')
        cy.editEmployee()
    })
 
})