/// <reference types="cypress" />
describe("login, Edit Save Data - Lab Test", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Edit Save Lab Test", () => {
        cy.visit('/administration')
        cy.editLabTest()
    })
 
})