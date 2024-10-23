import companyInfoPage from "../../PageObjects/AdministrationPages/companyInfoPage";
const compnayInfoObject = new companyInfoPage();

Cypress.Commands.add('companyInfoCMD',()=>{
    cy.intercept('api/companies/*').as('getCompaniesData')
    cy.xpath(compnayInfoObject.clickCompanyInfoTab).click({force:true})
    cy.wait('@getCompaniesData')
    cy.xpath(compnayInfoObject.clickStateDD).click({force:true})
    cy.get(compnayInfoObject.itemList).find(compnayInfoObject.findStateDiv).as('getDdList')
    .contains('Arizona').click({force:true})
    cy.xpath(compnayInfoObject.clickServiceType).click({force:true})
    cy.get('@getDdList').contains('Private Practice').click({force:true})
    cy.xpath(compnayInfoObject.saveBtn).click({force:true})
    cy.contains('Changes were saved successfully').should('not.exist')
})