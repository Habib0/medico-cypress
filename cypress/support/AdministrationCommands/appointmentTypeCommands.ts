import sharedPage from "../../PageObjects/sharedPage";
const sharedObject = new sharedPage();
var randomNumber = Math.floor(Math.random() * 10000);

Cypress.Commands.add("fieldValidationAppointmentType",()=>{
    cy.wait(2000)
    cy.xpath(sharedObject.clickAppointmentTab).click({force:true})
    cy.xpath(sharedObject.clickAddAppointmentBtn).should('be.visible').click({force:true})
    cy.xpath('//button[text()=" Save "]').click({force:true})
})
Cypress.Commands.add("saveAppointmentType",()=>{
    // cy.task("getCache", "randomNumber").then((a: any) => {
        cy.wait(2000)
        cy.get(sharedObject.nameInput).type('patient check' + randomNumber)
        cy.intercept('api/appointmentType/*').as('saveData')
        cy.xpath('//button[text()=" Save "]').click({force:true})
        cy.saveToast()
        // cy.intercept('api/room/dx/grid*').as('getGridList')
        // cy.get(sharedObject.closeBtn).click({force:true})
        // cy.wait('@getGridList')
    // })
})

Cypress.Commands.add('editAppointmentType',()=>{
    cy.xpath(sharedObject.clickAppointmentTab).click({force:true})
    cy.get(sharedObject.gridSearch).clear().type('patient check')
    cy.waitForGenericLoader().wait(2000)
    cy.get(sharedObject.btnEdit).eq(0).click({force:true})
    cy.get(sharedObject.nameInput).clear().type('Edit patient check'+ randomNumber)
    cy.xpath('//button[text()=" Save "]').click({force:true})
})
Cypress.Commands.add('deleteAppointmentType',()=>{
    cy.xpath(sharedObject.clickAppointmentTab).click({force:true})
    cy.get(sharedObject.gridSearch).clear().type('patient check')
    cy.waitForGenericLoader().wait(2000)
    cy.get(sharedObject.btnDelete).eq(0).click({force:true})
    cy.xpath(sharedObject.confirmationPopup).should('be.visible')
    cy.get(sharedObject.btnYes).click({force:true})
    cy.waitForGenericLoader()
})