/// <reference types="cypress" />
describe("login, Edit Save Data - Insurance Companies", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Edit Save Insurance Companies", () => {
        cy.visit('/administration')
        cy.editInsuranceData()
    })
 
})