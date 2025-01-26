declare namespace Cypress {
    interface Chainable {
        // common commands
        loginUI()
        waitForGenericLoader()
        saveToast()
        companySelect()
        saveToaster()

        // Companies Data
        fieldValidationCompaniesData()
        saveCompanies()
        editCompanies()
        viewCompanyInfo()
        deleteCompanies()

        // patients data
        fieldValidationPatientData()
        savePatients()
        editPatient()
        viewPatient()
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

         //Lab Test Data
         fieldValidationLabTest()
         saveLabTest()
         editLabTest()
         deleteLabTest()

        // vendors data
        fieldValidationVendors()
        saveVendors()
        editVendors()
        deleteVendors()

        // appointment type data
        fieldValidationAppointmentType()
        saveAppointmentType()
        editAppointmentType()
        deleteAppointmentType()

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

         // Template Types
         fieldValidationTemplateType()
         saveTemplateType()
         editSaveTemplateType()
         deleteTemplateType()

          // Phrases
          fieldValidationPhrases()
          savePhrases()
          editSavePhrases()
          deletePhrases()

        // selectable category libray data
        fieldValidationSelectableCategoriesLibrary()
        saveSelectableCategoriesLibrary()
        editSelectableCategoriesLibrary()
        deleteSelectableCategoriesLibrary()

          // Template Types libray
          fieldValidationTemplateTypeLibrary()
          saveTemplateTypeLibrary()
          editSaveTemplateTypeLibrary()
          deleteTemplateTypeLibrary()

        // template selectable list librar
        fieldValidationSelectableListLibrary()
        saveSelectableListLibrary()
        editSaveSelectableListLibrary()
        deleteSelectableListLibrary()

        // patient orders data
        fieldValidationPatientOrders()
        savePatientOrders()
        editSavePatientOrders()
        deletePatientOrders()

        // business hour data
        fieldValidationBusinessHour()
        saveBusinessHour()
    }
}