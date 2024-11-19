/// <reference types="cypress" />
describe("login, Delete - Locations", () => {
    it("login as a user", () => {
        cy.loginUI()
    })

    it("Delete Locations", () => {
        cy.visit('/administration')
        cy.deleteLocationsData()
    })
 
})