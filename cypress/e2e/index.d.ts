declare namespace Cypress {
    interface Chainable {
        loginUI()

        // Administration data
        //company info data
        companyInfoCMD()

        // locations data
        fieldValidationLocationsData()
        saveLocationsData()
    }
}