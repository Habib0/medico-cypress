/// <reference types="cypress" />
describe("login, Edit Save Role - Permissions", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Edit Save Role - Permissions", () => {
        cy.visit('/administration')
        cy.editRolePermissions()
    })
 
})