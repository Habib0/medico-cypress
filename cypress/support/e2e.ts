// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "cypress-xpath";
import './commands'
import './AdministrationCommands/companyInfoCommand'
import './AdministrationCommands/locationCommand'
import './AdministrationCommands/roomsCommand'
import './patientsCommands'
import './companiesCommands'
import './AdministrationCommands/permissionsCommands'
import './AdministrationCommands/employeeCommands'
import './AdministrationCommands/insuranceCompaniesCommands'
import './AdministrationCommands/templateSelectableListcategoriesCommands'
import './AdministrationCommands/templateSelectableListCommands'
import './AdministrationCommands/templateTypeCommands'
import './AdministrationCommands/labTestCommands'
import './AdministrationCommands/vendorsCommands'
import './AdministrationCommands/appointmentTypeCommands'
import './LibraryCommands/templateTypesCommands'
import './LibraryCommands/selectableListCategoriesCommands'
import './LibraryCommands/selectableListCommands'

// Alternatively you can use CommonJS syntax:
// require('./commands')