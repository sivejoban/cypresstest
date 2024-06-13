const { defineConfig } = require("cypress");
 
 
module.exports = defineConfig({
 
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
  "video": true,
 
  env: {
    url: "https://rahulshettyacademy.com",
  },
  retries: {
    runMode: 0,
 
  },
  projectId: "5iu2te",
 
  e2e: {
    setupNodeEvents(on,config)
    {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/examples/*.js'
 
  },
});