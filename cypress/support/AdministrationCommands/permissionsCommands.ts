import permissionPage from "../../PageObjects/AdministrationPages/permissionPage";
const permissonObject = new permissionPage()
var randomNumber = Math.floor(Math.random() * 10000);

Cypress.Commands.add("fieldValidationRolePermissions",()=>{
    cy.get(permissonObject.clickAdministrationMenu).click({force:true})
    cy.waitForGenericLoader()
    cy.xpath(permissonObject.clickPermissionTab).click({force:true})
    cy.xpath(permissonObject.clickAddRoleBtn).should('be.visible').click({force:true})
    // cy.get('[class="dx-overlay-content dx-popup-normal dx-resizable dx-popup-flex-height"]').should('be.visible')
    cy.xpath('//button[@class="btn btn-md btn-outline-secondary" and text()=" Save "]').click({force:true})
    cy.xpath('//div[@class="dx-overlay-content dx-invalid-message-content" and contains(text(), "Name is required")]').should('be.visible')
})
Cypress.Commands.add("saveRolePermissions",()=>{
    // cy.task("getCache", "randomNumber").then((a: any) => {
        cy.wait(2000)
        cy.get(permissonObject.nameInput).type('Automated Role ' + randomNumber)
        cy.xpath('//button[@class="btn btn-md btn-outline-secondary" and text()=" Save "]').click({force:true})
        // cy.saveToast()
        cy.intercept('api/role/dx/grid*').as('getGridList')
        cy.get(permissonObject.closeBtn).click({force:true})
        cy.wait('@getGridList')
    // })
})

Cypress.Commands.add('editRolePermissions',()=>{
    cy.xpath(permissonObject.clickPermissionTab).click({force:true})
    cy.get(permissonObject.gridSearch).clear().type('Automated Role')
    cy.waitForGenericLoader()
    cy.wait(3000)
    cy.get(permissonObject.btnEdit).eq(0).click({force:true})
    // cy.get(permissonObject.addPopupVisible).should('be.visible')
    cy.get(permissonObject.nameInput).clear().type('Edit Automated Role '+ randomNumber)
    cy.xpath('//button[@class="btn btn-md btn-outline-secondary" and text()=" Save "]').click({force:true})
})
// Cypress.Commands.add('deletePermissionData',()=>{
//     cy.xpath(permissonObject.clickPermissionTab).click({force:true})
//     cy.get(permissonObject.gridSearch).clear().type('Automated Role')
//     cy.waitForGenericLoader()
//     cy.get(permissonObject.btnDelete).eq(0).click({force:true})
//     cy.xpath(permissonObject.confirmationPopup).should('be.visible')
//     cy.get(permissonObject.btnYes).click({force:true})
//     cy.waitForGenericLoader()
// })