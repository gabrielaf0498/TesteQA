const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
baseUrl: 'https://www.magazineluiza.com.br',
defaultCommandTimeout: 30000,
waitForAnimations: true,
watchForFileChanges: true,
setupNodeEvents(on, config) {
   // implement node event listeners here
},
},
});



