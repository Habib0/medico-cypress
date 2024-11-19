import InsuranceCompaniesPage from "../../PageObjects/AdministrationPages/InsuranceCompaniesPage";
const insuranceObject = new InsuranceCompaniesPage();
var randomNumber = Math.floor(Math.random() * 10000);

Cypress.Commands.add("fieldValidationInsuranceData",()=>{
    cy.waitForGenericLoader()
    cy.xpath(insuranceObject.clickInsuranceTab).click({force:true})
    cy.waitForGenericLoader()
    cy.xpath(insuranceObject.clickAddNewInsuranceCompanyBtn).should('be.visible').click({force:true})
    cy.xpath(insuranceObject.saveBtn).should('be.visible').click({force:true})
    cy.get('[class="dx-show-invalid-badge dx-textbox dx-texteditor dx-editor-outlined dx-texteditor-empty dx-widget dx-validator dx-visibility-change-handler dx-invalid"]').should('be.visible')
})
Cypress.Commands.add("saveInsuranceData",()=>{
    // cy.task("getCache", "randomNumber").then((a: any) => {
        cy.wait(2000)
        cy.get(insuranceObject.nameInput).type('Automated Insurance ' + randomNumber)
        cy.waitForGenericLoader()
        cy.get(insuranceObject.inputPrayerId).type('2343')
        cy.get(insuranceObject.inputCpCode).type('5679')
        cy.xpath(insuranceObject.clickActiveDate).click({force:true})
        cy.get(insuranceObject.selectTodayDate).eq(0).click({force:true})
        cy.intercept('api/insurance/company/*').as('saveData')
        cy.xpath(insuranceObject.saveBtn).click({force:true})
        cy.saveToast()
        // cy.wait('@saveData')
        // cy.intercept('api/insurance/company/dx/grid*').as('getGridList')
        // cy.get(insuranceObject.closeBtn).click({force:true})
        // cy.wait('@getGridList')
    // })
})

Cypress.Commands.add('editInsuranceData',()=>{
    cy.waitForGenericLoader()
    cy.xpath(insuranceObject.clickInsuranceTab).click({force:true})
    cy.waitForGenericLoader()
    cy.get(insuranceObject.gridSearch).clear().type('Automated Insurance')
    cy.waitForGenericLoader().wait(1000)
    cy.get(insuranceObject.btnEdit).eq(0).click({force:true})
    cy.get(insuranceObject.nameInput).should('be.visible').clear().type('Edit Automated Insurance '+ randomNumber)
    cy.get(insuranceObject.saveBtn).click({force:true})
})
Cypress.Commands.add('deleteInsuranceData',()=>{
    cy.waitForGenericLoader()
    cy.xpath(insuranceObject.clickInsuranceTab).click({force:true})
    cy.waitForGenericLoader()
    cy.get(insuranceObject.gridSearch).clear().type('Automated Insurance')
    cy.waitForGenericLoader()
    cy.get(insuranceObject.btnDelete).eq(0).click({force:true})
    cy.xpath(insuranceObject.confirmationPopup).should('be.visible')
    cy.get(insuranceObject.btnYes).click({force:true})
    cy.waitForGenericLoader()
})