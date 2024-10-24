declare namespace Cypress {
    interface Chainable {
        // common commands
        loginUI()
        waitForGenericLoader()
        saveToast()
        // Administration data
        //company info data
        companyInfoCMD()

        // locations data
        fieldValidationLocationsData()
        saveLocationsData()
        editLocationsData()
        deleteLocationsData()

         // rooms data
         fieldValidationRoomsData()
         saveRoomsData()
         editRoomsData()
         deleteRoomsData()
    }
}