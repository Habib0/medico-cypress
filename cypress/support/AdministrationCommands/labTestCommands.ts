import labTestPage from "../../PageObjects/AdministrationPages/labTestPage";
const labObject = new labTestPage();
var randomNumber = Math.floor(Math.random() * 10000);

Cypress.Commands.add("fieldValidationLabTest",()=>{
    cy.wait(2000)
    cy.xpath(labObject.clickLabtestTab).click({force:true})
    cy.xpath(labObject.clickNewLabTestBtn).should('be.visible').click({force:true})
    cy.get('[aria-label="Save & Close"]').click({force:true})
})
Cypress.Commands.add("saveLabTest",()=>{
    // cy.task("getCache", "randomNumber").then((a: any) => {
        cy.wait(2000)
        cy.get(labObject.sectionInput).type('Radiologist' + randomNumber)
        cy.get(labObject.codeTypeInput).type('cts')
        cy.get(labObject.codeInput).type('D343')
        cy.get(labObject.codeDescInput).type('ct scan kwb')
        cy.xpath(labObject.testFeeInput).type('6000')
        cy.xpath(labObject.categoryClick).click({force:true}).wait(1000)
        // cy.waitForGenericLoader()
        cy.xpath(labObject.selectCategory).should('be.visible').click({force:true})
        cy.xpath(labObject.clickVendor).click({force:true})
        cy.xpath(labObject.selectVendors).click({force:true})
        cy.get(labObject.noteEditor).type('ct scan for kindeys')
        // cy.get(labObject.clickActive).click({force:true})
        cy.intercept('api/orders/create').as('saveData')
        cy.get('[aria-label="Save & Close"]').click({force:true})
        cy.saveToast()
        cy.wait('@saveData')
        // cy.intercept('api/room/dx/grid*').as('getGridList')
        // cy.get(labObject.closeBtn).click({force:true})
        // cy.wait('@getGridList')
    // })
})

Cypress.Commands.add('editLabTest',()=>{
    cy.xpath(labObject.clickLabtestTab).click({force:true})
    cy.get(labObject.gridSearch).clear().type('Radiologist')
    cy.waitForGenericLoader().wait(1000)
    cy.get(labObject.btnEdit).eq(0).click({force:true})
    cy.get(labObject.codeDescInput).clear().type('ct scan kwb rl')
    cy.get('[aria-label="Save & Close"]').click({force:true})
})
Cypress.Commands.add('deleteLabTest',()=>{
    cy.xpath(labObject.clickLabtestTab).click({force:true})
    cy.get(labObject.gridSearch).clear().type('Radiologist')
    cy.waitForGenericLoader().wait(2000)
    cy.get(labObject.btnDelete).eq(0).click({force:true})
    cy.xpath(labObject.confirmationPopup).should('be.visible')
    cy.get(labObject.btnYes).click({force:true})
    cy.waitForGenericLoader()
})