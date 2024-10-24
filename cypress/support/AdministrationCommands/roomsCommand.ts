import roomPage from "../../PageObjects/AdministrationPages/roomsPage";
const roomObject = new roomPage();
var randomNumber = Math.floor(Math.random() * 10000);

Cypress.Commands.add("fieldValidationRoomsData",()=>{
    cy.xpath(roomObject.clickRoomsTab).click({force:true})
    cy.xpath(roomObject.clickAddNewRoomBtn).should('be.visible').click({force:true})
    cy.get(roomObject.addPopupVisible).should('be.visible')
    cy.get(roomObject.saveAndClose).click({force:true})
    cy.xpath(roomObject.nameIsRequired).should('be.visible')
})
Cypress.Commands.add("saveRoomsData",()=>{
    // cy.task("getCache", "randomNumber").then((a: any) => {
        cy.wait(2000)
        cy.get(roomObject.nameInput).type('Automated Room ' + randomNumber)
        cy.xpath(roomObject.clickLocationType).click({force:true})
        cy.get(roomObject.loader).should('be.visible')
        cy.waitForGenericLoader()
        cy.contains('Glendale').should('be.visible').click({force:true})
        cy.get(roomObject.clickActive).click({force:true})
        cy.intercept('api/location/*').as('saveData')
        cy.get(roomObject.save).click({force:true})
        cy.saveToast()
        cy.wait('@saveData')
        cy.intercept('api/location/dx/grid/*').as('getGridList')
        cy.get(roomObject.closeBtn).click({force:true})
        cy.wait('@getGridList')
    // })
})

Cypress.Commands.add('editRoomsData',()=>{
    cy.xpath(roomObject.clickRoomsTab).click({force:true})
    cy.get(roomObject.gridSearch).clear().type('Automated Room')
    cy.waitForGenericLoader()
    cy.get(roomObject.btnEdit).eq(0).click({force:true})
    cy.get(roomObject.addPopupVisible).should('be.visible')
    cy.get(roomObject.nameInput).clear().type('Edit Automated Room '+ randomNumber)
    cy.get(roomObject.saveAndClose).click({force:true})
})
Cypress.Commands.add('deleteRoomsData',()=>{
    cy.xpath(roomObject.clickRoomsTab).click({force:true})
    cy.get(roomObject.gridSearch).clear().type('Automated Room')
    cy.waitForGenericLoader()
    cy.get(roomObject.btnDelete).eq(0).click({force:true})
    cy.xpath(roomObject.confirmationPopup).should('be.visible')
    cy.get(roomObject.btnYes).click({force:true})
    cy.waitForGenericLoader()
})