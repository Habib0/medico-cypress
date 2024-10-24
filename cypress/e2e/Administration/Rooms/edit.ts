/// <reference types="cypress" />
describe("login, Edit Save Data - Rooms", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Edit Save Rooms", () => {
        cy.visit('/administration')
        cy.editRoomsData()
    })
 
})