declare namespace Cypress {
    interface Chainable {
        // common commands
        loginUI()
        waitForGenericLoader()
        saveToast()
        companySelect()

        // Companies Data
        fieldValidationCompaniesData()
        saveCompanies()
        editCompanies()
        deleteCompanies()

        // patients data
        fieldValidationPatientData()
        savePatients()
        editPatient()
        deletePatient()

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

         // permssion role data
         saveRolePermissions()
         fieldValidationRolePermissions()
         editRolePermissions()

         // employee data
         fieldValidationEmployeeData()
         saveEmployee()
         editEmployee()
         deleteEmployee()
         
        // Insurance data
        fieldValidationInsuranceData()
        saveInsuranceData()
        editInsuranceData()
        deleteInsuranceData()

        // Template Data

        // Template selectable List category
        fieldValidationSelectableListCategories()
        saveSelectableListCategories()
        editSaveSelectableListCategories()
        deleteSelectableListCategories()

         // Template selectable List
         fieldValidationSelectableList()
         saveSelectableList()
         editSaveSelectableList()
         deleteSelectableList()
    }
}