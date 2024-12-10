/// <reference types="cypress" />
describe("login, Delete - Vendors", () => {
    it("login as a user", () => {
        cy.loginUI()
    })

    it("Delete Vendors", () => {
        cy.visit('/administration')
        cy.deleteVendors()
    })
 
})