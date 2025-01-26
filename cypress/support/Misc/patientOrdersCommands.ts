import patientOrdersPage from "../../PageObjects/Misc/patientOrdersPage";
const patientObject = new patientOrdersPage()

Cypress.Commands.add('fieldValidationPatientOrders',()=>{
    cy.waitForGenericLoader()
    cy.xpath(patientObject.clickNewOrderBtn).should('be.visible').click({force:true})
    cy.get('[aria-label="Save & Close"]').should('be.visible').click({force:true})
    cy.get('[class="dx-overlay-content dx-invalid-message-content"]').should('be.visible')
})


Cypress.Commands.add('savePatientOrders',()=>{
    cy.xpath(patientObject.clickPhysician).click({force:true})
    cy.xpath(patientObject.selectPhysician).click({force:true})
    cy.xpath(patientObject.clickStatus).click({force:true})
    cy.xpath(patientObject.selectStatus).click({force:true})
    cy.xpath(patientObject.clickPriority).click({force:true})
    cy.xpath(patientObject.selectPriority).click({force:true})
    cy.xpath(patientObject.clickInsurance).click({force:true})
    cy.get(patientObject.selectInsurance).find('tbody tr td').first().click({force:true})
    cy.xpath(patientObject.clickPatient).click({force:true})
    cy.get(patientObject.selectPatient).find('tbody tr td').first().click({force:true})
    cy.xpath(patientObject.clickNotifyBtn).click({force:true})
    cy.xpath(patientObject.selectNotify).click({force:true})
    cy.get(patientObject.notesInput).type('test notes')
    cy.xpath(patientObject.clickAddItem).click({force:true})
    cy.xpath(patientObject.clickLabTest).click({force:true})
    cy.get('[class="dx-bordered-bottom-view dx-datagrid-rowsview dx-datagrid-nowrap dx-scrollable dx-visibility-change-handler dx-scrollable-both dx-scrollable-simulated dx-last-row-border"]')
        .find('tbody tr td').contains('Sotrovimab').first().click({force:true})
    cy.xpath('//span[@class="dx-button-text" and text()="Save"]').eq(1).click({force:true}).wait(1000)
    cy.get('[aria-label="Save & Close"]').click({force:true})
    cy.saveToast()
    
})

Cypress.Commands.add('editSavePatientOrders',()=>{
    cy.waitForGenericLoader()
    cy.get(patientObject.gridSearch).clear().type('doom')
    cy.waitForGenericLoader()
    cy.wait(2000)
    cy.get(patientObject.btnRefresh).eq(0).click({force:true})
    cy.waitForGenericLoader()
    cy.get(patientObject.btnEdit).eq(0).click({force:true})
    cy.get(patientObject.notesInput).should('be.visible').clear().type('test notes edited')
    cy.get('[aria-label="Save & Close"]').click({force:true})

})

Cypress.Commands.add('deletePatientOrders',()=>{
    cy.waitForGenericLoader()
    cy.get(patientObject.gridSearch).clear().type('doom')
    cy.waitForGenericLoader()
    cy.wait(2000)
    cy.get(patientObject.btnDelete).eq(0).click({force:true})
    cy.xpath(patientObject.confirmationPopup).should('be.visible')
    cy.get(patientObject.btnYes).click({force:true})
    cy.waitForGenericLoader()
})