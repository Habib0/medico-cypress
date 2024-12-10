/// <reference types="cypress" />
describe("login, Delete - Lab Test", () => {
    it("login as a user", () => {
        cy.loginUI()
    })

    it("Delete Lab Test", () => {
        cy.visit('/administration')
        cy.deleteLabTest()
    })
 
})