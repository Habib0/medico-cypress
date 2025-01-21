/// <reference types="cypress" />
describe("login, Edit Save Data - Patient Orders", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Edit Save Patient Orders", () => {
        cy.visit('/lab-orders')
        cy.editSavePatientOrders()
    })
 
})