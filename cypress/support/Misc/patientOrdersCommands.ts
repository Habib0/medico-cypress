import patientOrdersPage from "../../PageObjects/Misc/patientOrdersPage";
const patientObject = new patientOrdersPage()

Cypress.Commands.add('fieldValidationPatientOrders',()=>{
    cy.waitForGenericLoader()
    cy.xpath(patientObject.clickNewOrderBtn).should('be.visible').click({force:true})
    cy.get('[class="dx-overlay-content dx-popup-normal dx-popup-draggable dx-resizable"]').should('be.visible')
    cy.get(patientObject.saveAndClose).click({force:true})
    cy.get('[class="dx-show-invalid-badge dx-textbox dx-texteditor dx-editor-outlined dx-texteditor-empty dx-widget dx-validator dx-visibility-change-handler dx-invalid"').should('be.visible')
})


Cypress.Commands.add('savePatientOrders',()=>{
    cy.xpath(patientObject.clickPhysician).click({force:true})
    cy.xpath(patientObject.selectPhysician).click({force:true})
    cy.xpath(patientObject.clickStatus).click({force:true})
    cy.xpath(patientObject.selectStatus).click({force:true})
    cy.xpath(patientObject.clickPriority).click({force:true})
    cy.xpath(patientObject.selectPriority).click({force:true})
    cy.xpath(patientObject.clickInsurance).click({force:true})
    cy.xpath(patientObject.selectInsurance).click({force:true})
    cy.xpath(patientObject.clickPatient).click({force:true})
    cy.xpath(patientObject.selectPatient).click({force:true})
    cy.xpath(patientObject.clickNotifyBtn).click({force:true})
    cy.xpath(patientObject.selectNotify).click({force:true})
    cy.get(patientObject.notesInput).type('test notes')
    cy.xpath(patientObject.clickAddItem).click({force:true})
    cy.xpath(patientObject.clickLabTest).click({force:true})
    cy.get(patientObject.saveAndClose).click({force:true})
    cy.saveToast()
    
})

Cypress.Commands.add('editSavePatientOrders',()=>{
    cy.waitForGenericLoader()
    cy.get(patientObject.gridSearch).clear().type('serge')
    cy.waitForGenericLoader()
    cy.wait(2000)
    cy.get(patientObject.btnEdit).eq(0).click({force:true})
    cy.get('[class="dx-overlay-content dx-popup-normal dx-popup-draggable dx-resizable"]').should('be.visible')
    cy.get(patientObject.notesInput).clear().type('test notes edited')
    cy.get(patientObject.saveAndClose).click({force:true})

})

Cypress.Commands.add('deletePatientOrders',()=>{
    cy.waitForGenericLoader()
    cy.get(patientObject.gridSearch).clear().type('serge')
    cy.waitForGenericLoader()
    cy.wait(2000)
    cy.get(patientObject.btnDelete).eq(0).click({force:true})
    cy.xpath(patientObject.confirmationPopup).should('be.visible')
    cy.get(patientObject.btnYes).click({force:true})
    cy.waitForGenericLoader()
})