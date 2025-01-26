/// <reference types="cypress" />
describe("login, Edit Save Data - Error Logs", () => {
    it("login as a user", () => {
        cy.loginUI()
    })
    it("Edit Save Error Logs", () => {
        cy.visit('//error-logs')
        cy.editSavePatientOrders()
    })
 
})