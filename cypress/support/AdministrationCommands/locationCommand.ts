import locationsPage from "../../PageObjects/AdministrationPages/locationsPage";
const locationsObject = new locationsPage()
import companyInfoPage from "../../PageObjects/AdministrationPages/companyInfoPage";
const compnayInfoObject = new companyInfoPage();
var randomNumber = Math.floor(Math.random() * 10000);
Cypress.Commands.add("fieldValidationLocationsData",()=>{
    cy.xpath(locationsObject.clickLocationsTab).click({force:true})
    cy.xpath(locationsObject.clickAddNewLocationBtn).should('be.visible').click({force:true})
    cy.get(locationsObject.addPopupVisible).should('be.visible')
    cy.get(locationsObject.saveAndClose).click({force:true})
    cy.xpath(locationsObject.nameIsRequired).should('be.visible')
})
Cypress.Commands.add("saveLocationsData",()=>{
    // cy.task("getCache", "randomNumber").then((a: any) => {
        cy.get(locationsObject.nameInput).type('tele health ' + randomNumber)
        cy.get(locationsObject.addressInput).type('120 sixth road')
        cy.get(locationsObject.secondryAddressInput).type('230 oxfort street')
        cy.get(locationsObject.cityInput).type('london')
        cy.xpath(compnayInfoObject.clickStateDD).click({force:true})
        cy.get(compnayInfoObject.itemList).find(compnayInfoObject.findStateDiv)
        .contains('Arizona').click({force:true})
        cy.get(locationsObject.zipInput).type('20014')
        cy.xpath(locationsObject.inputPhoneXpath).type('8923324353')
        cy.xpath(locationsObject.inputFaxXpath).type('986564-6557')
        cy.get(locationsObject.letterCodeInput).type('321')
        cy.get(locationsObject.clickActive).click({force:true})
        cy.intercept('api/location/*').as('saveData')
        cy.get(locationsObject.save).click({force:true})
        cy.contains('Changes were saved successfully').should('not.exist')
        cy.wait('@saveData')
        cy.intercept('api/location/dx/grid/*').as('getGridList')
        cy.get(locationsObject.closeBtn).click({force:true})
        cy.wait('@getGridList')
    // })
})