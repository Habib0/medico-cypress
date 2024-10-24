import loginPage from "../PageObjects/loginPage";
const loginObject = new loginPage();
import sharedPage from "../PageObjects/sharedPage";
const sharedObject= new sharedPage()
var randomNumber = Math.floor(Math.random() * 10000);

Cypress.Commands.add('loginUI',()=>{
    cy.clearAllCookies()
    cy.clearLocalStorage()
    cy.visit('/')
    cy.get(loginObject.loginForm).should('be.visible')
    cy.get(loginObject.email).type(Cypress.env("username"))
    cy.contains('button', 'Next').click({force:true})
    cy.get(loginObject.password).type(Cypress.env("password"))
    cy.contains('button', ' Login ').click({force:true})
    cy.url().should('include', '/appointments')
    // cy.task("putInCache", { key: "randomNumber", data: randomNumber });
    // cy.task("getCache", "randomNumber").then((a: any) => {
    //   cy.log(a);
    // });
})

Cypress.Commands.add("waitForGenericLoader", () => {
    cy.get(sharedObject.loader).should("not.be.visible");
  });

  Cypress.Commands.add("saveToast", () => {
    cy.contains('Changes were saved successfully').as('saveToast').should('exist')
    cy.contains('@saveToast').should('not.exist')
  });