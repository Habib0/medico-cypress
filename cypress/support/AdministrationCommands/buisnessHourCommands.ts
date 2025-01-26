import buisnessHourPage from "../../PageObjects/AdministrationPages/buisnessHourPage";
const buisnessHourObject = new buisnessHourPage()



Cypress.Commands.add("fieldValidationBusinessHour",()=>{
    cy.xpath(buisnessHourObject.businessHourTab).click({force:true})
    cy.waitForGenericLoader()
    cy.get('[aria-label="Save Holidays"]').click({force:true})
    cy.contains('div', 'Error').should('be.visible')
    cy.get(buisnessHourObject.btnOk).click({force:true})
})

Cypress.Commands.add("saveBusinessHour",()=>{
    
    cy.get('.ft-14').eq(1).find('tbody tr td div[class="dx-dropdowneditor-icon"]').eq(0).click({force:true})
    cy.get('[class="dx-calendar-cell dx-calendar-today dx-calendar-contoured-date"]').eq(0).click({force:true})

    cy.get('.ft-14').eq(1).find('tbody tr td div[class="dx-widget dx-button-normal dx-dropdowneditor-button"]').eq(2)
    .click({force:true})
    cy.get('.ft-14').eq(1).get('[class="dx-item-content dx-list-item-content"]').contains('Close').click({force:true})

    cy.get('.ft-14').eq(1).find('tbody tr td div[class="dx-widget dx-button-normal dx-dropdowneditor-button"]').eq(4)
    .click({force:true})
    cy.get('.ft-14').eq(1).get('[class="dx-item-content dx-list-item-content"]').contains('Office Close').click({force:true})

    cy.get('.ft-14').eq(1).find('tbody tr td div[class="dx-dropdowneditor-icon"]').eq(1).click({force:true})
    cy.get('.ft-14').eq(1).get('[class="dx-item-content dx-list-item-content"]').contains('12:00 AM').click({force:true})

    cy.get('.ft-14').eq(1).find('tbody tr td div[class="dx-dropdowneditor-icon"]').eq(3).click({force:true})
    cy.get('.ft-14').eq(1).get('[class="dx-item-content dx-list-item-content"]').contains('1:00 AM').click({force:true})
    cy.get('[aria-label="Add Holiday"]').click({force:true})

    cy.get('[aria-label="Save Holidays"]').click({force:true})
})