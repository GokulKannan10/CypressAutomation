/// <reference types="Cypress" />

const { func } = require("assert-plus")


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})


 
describe('calendar Test Suite', function() 

{

    

    
it('calendar',function() {

    const year = "2025"
    const monthnumber = "7"
    const date ="9"
    const expectedList = [monthnumber,date,year];

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

    cy.get('[href="#/offers"]').then(function (variable) {

        const url = variable.prop('href')  //to save the href url in the variable
        cy.visit(url)

        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()

        cy.contains('button', year).click()
        cy.get('.react-calendar__year-view__months__month').eq(Number(monthnumber)-1).click();
        cy.contains('abbr',date).click()

        //assertion
        cy.get(".react-date-picker__inputGroup__input").each(($el,index)=>
            {
                cy.wrap($el).invoke('val').should('eq',expectedList[index]);
            }
        )    

        
    })

})
})