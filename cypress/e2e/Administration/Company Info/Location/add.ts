/// <reference types="cypress" />
describe("login, Field Validation, Save - Locations", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Field Validation Locations", () => {
        cy.visit('/administration')
        cy.fieldValidationLocationsData()
    })
    it("Save Locations", () => {
        cy.saveLocationsData()
    })
 
})