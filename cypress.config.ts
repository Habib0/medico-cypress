import { defineConfig } from 'cypress'

export default defineConfig({
  env: {
    baseApiUrl: 'https://medicophysicians-f0d5b2gzdkeafdbc.westus-01.azurewebsites.net/',
    username: 'superadmin@mail.com',
    password: 'E"AQd@EfM~{D8p,Z',

  },
  viewportWidth: 1920,
  watchForFileChanges: false,
  video: false,
  viewportHeight: 960,
  chromeWebSecurity: false,
  defaultCommandTimeout: 50000,
  requestTimeout: 30000,
  responseTimeout: 40000,
  pageLoadTimeout: 40000,
  screenshotsFolder: 'cypress/screenshots',
  waitForAnimations: true,

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    testIsolation:false,
    baseUrl: 'https://medicophysicians-f0d5b2gzdkeafdbc.westus-01.azurewebsites.net/',
    specPattern: [
      'cypress/e2e/Patients/add.ts',
      'cypress/e2e/Patients/edit.ts',
      'cypress/e2e/Patients/delete.ts',
      'cypress/e2e/Administration/Company Info/Location/add.ts',
      'cypress/e2e/Administration/Company Info/Location/edit.ts',
      'cypress/e2e/Administration/Company Info/Location/delete.ts',
      'cypress/e2e/Administration/Company Info/Rooms/add.ts',
      'cypress/e2e/Administration/Company Info/Rooms/edit.ts',
      'cypress/e2e/Administration/Company Info/Rooms/delete.ts',
      'cypress/e2e/Administration/Company Info/Employee/add.ts',
      'cypress/e2e/Administration/Company Info/Employee/edit.ts',
      'cypress/e2e/Administration/Company Info/Permissions/add.ts',
      'cypress/e2e/Administration/Company Info/Permissions/edit.ts',
      'cypress/e2e/Administration/Insurance Companies/add.ts',
      'cypress/e2e/Administration/Insurance Companies/edit.ts',
      'cypress/e2e/Administration/Insurance Companies/delete.ts',
      'cypress/e2e/Companies/add.ts',
      'cypress/e2e/Companies/edit.ts',
      'cypress/e2e/Companies/delete.ts',
    ]
    }
})