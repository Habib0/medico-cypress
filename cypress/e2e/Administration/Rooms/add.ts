/// <reference types="cypress" />
describe("login, Field Validation, Save - Rooms", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Field Validation Rooms", () => {
        cy.visit('/administration')
        cy.fieldValidationRoomsData()
    })
    it("Save Rooms", () => {
        cy.saveRoomsData()
    })
 
})