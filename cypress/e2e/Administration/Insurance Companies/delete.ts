/// <reference types="cypress" />
describe("login, Delete - Insurance Companies", () => {
    it("login as a user", () => {
        cy.loginUI()
    })

    it("Delete Insurance Companies", () => {
        cy.visit('/administration')
        cy.deleteInsuranceData()
    })
 
})