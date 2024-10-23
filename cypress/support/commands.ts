import loginPage from "../PageObjects/loginPage";
const loginObject = new loginPage()
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
