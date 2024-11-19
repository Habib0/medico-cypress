declare namespace Cypress {
    interface Chainable {
        // common commands
        loginUI()
        waitForGenericLoader()
        saveToast()
        companySelect()
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
         
         // patients data
         fieldValidationPatientData()
         savePatients()
         editPatient()
         deletePatient()

        // Insurance data
        fieldValidationInsuranceData()
        saveInsuranceData()
        editInsuranceData()
        deleteInsuranceData()

         // Companies Data
         fieldValidationCompaniesData()
         saveCompanies()
         editCompanies()
         deleteCompanies()
    }
}