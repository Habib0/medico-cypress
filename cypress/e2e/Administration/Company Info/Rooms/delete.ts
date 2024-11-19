/// <reference types="cypress" />
describe("login, Delete - Rooms", () => {
    it("login as a user", () => {
        cy.loginUI()
    })

    it("Delete Rooms", () => {
        cy.visit('/administration')
        cy.deleteRoomsData()
    })
 
})