import vendorsPage from "../../PageObjects/AdministrationPages/vendorsPage";
const vendorObject = new vendorsPage();
var randomNumber = Math.floor(Math.random() * 10000);

Cypress.Commands.add("fieldValidationVendors",()=>{
    cy.wait(2000)
    cy.xpath(vendorObject.clickVendorTab).click({force:true})
    cy.xpath(vendorObject.addVendorBtn).should('be.visible').click({force:true})
    cy.xpath(vendorObject.saveBtn).click({force:true})
})
Cypress.Commands.add("saveVendors",()=>{
    // cy.task("getCache", "randomNumber").then((a: any) => {
        cy.wait(2000)
        cy.get(vendorObject.nameInput).type('nayar' + randomNumber)
        cy.get(vendorObject.addressInput).type('jhang')

        cy.intercept('api/vendors/*').as('saveData')
        cy.xpath(vendorObject.saveBtn).click({force:true})
        cy.saveToast()
        // cy.wait('@saveData')
        // cy.intercept('api/room/dx/grid*').as('getGridList')
        // cy.get(vendorObject.closeBtn).click({force:true})
        // cy.wait('@getGridList')
    // })
})

Cypress.Commands.add('editVendors',()=>{
    cy.xpath(vendorObject.clickVendorTab).click({force:true})
    cy.get(vendorObject.gridSearch).clear().type('nayar')
    cy.waitForGenericLoader().wait(2000)
    cy.get(vendorObject.btnEdit).eq(0).click({force:true})
    cy.get(vendorObject.nameInput).clear().type('Edit nayar'+ randomNumber)
    cy.contains('button', 'Update').click({force:true})
})
Cypress.Commands.add('deleteVendors',()=>{
    cy.xpath(vendorObject.clickVendorTab).click({force:true})
    cy.get(vendorObject.gridSearch).clear().type('nayar')
    cy.waitForGenericLoader().wait(2000)
    cy.get(vendorObject.btnDelete).eq(0).click({force:true})
    cy.xpath(vendorObject.confirmationPopup).should('be.visible')
    cy.get(vendorObject.btnYes).click({force:true})
    cy.waitForGenericLoader()
})