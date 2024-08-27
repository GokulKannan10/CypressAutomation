/// <reference types="Cypress" />


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

import "cypress-iframe"
 
describe('My third Test Suite', function() 
{
 
it('My third case',function() {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.frameLoaded("#courses-iframe")

    cy.iframe().find("a[href*='mentorship']").eq(0).click()
    

    

})
})
