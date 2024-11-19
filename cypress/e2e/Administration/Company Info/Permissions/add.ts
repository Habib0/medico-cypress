/// <reference types="cypress" />
describe("login, Field Validation, Save Role - Permissions", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Field Validation Role - Permissions", () => {
        // cy.visit('/administration')
        cy.fieldValidationRolePermissions()
    })
    it("Save Role - Permissions", () => {
        cy.saveRolePermissions()
    })
})