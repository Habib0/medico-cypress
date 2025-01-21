/// <reference types="cypress" />
describe("login, Delete - Patient Orders", () => {
    it("login as a user", () => {
        cy.loginUI()
    })

    it("Delete Patient", () => {
        cy.visit('/lab-orders')
        cy.deletePatientOrders()
    })
 
})