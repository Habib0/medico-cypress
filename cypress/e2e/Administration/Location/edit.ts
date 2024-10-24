/// <reference types="cypress" />
describe("login, Edit Save Data - Locations", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Edit Save Locations", () => {
        cy.visit('/administration')
        cy.editLocationsData()
    })
 
})