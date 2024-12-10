/// <reference types="cypress" />
describe("login, Edit Save Data - Vendors", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Edit Save Vendors", () => {
        cy.visit('/administration')
        cy.editVendors()
    })
 
})