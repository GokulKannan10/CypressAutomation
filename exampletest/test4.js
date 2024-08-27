// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

 
describe('My third Test Suite', function() 
{
 
it('My third case',function() {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('.mouse-hover-content').invoke('show') // to show the hidden elements
    cy.contains('Top').click()

    cy.url().should('include', 'top')

    cy.get('#opentab').then(function(el){

        const url = el.prop('href')  //to save the href url in the variable
        cy.visit(url)

        //to work in the child window use th .origin
        cy.origin(url, ()=>{

        cy.get("div.sub-menu-bar a[href*='about']").click()

        })

    })

})
})
