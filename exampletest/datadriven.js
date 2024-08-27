/// <reference types = "Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

import homepage from "./pageobjects/homepage"
 
describe('datadriven Test Suite', function() 
{

    before(function(){

        cy.fixture('example').then(function(data){
            this.data=data

        })

    })

 
it('datadriven',function() {

    const Homepage = new homepage()

    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    Homepage.getEditBox().type(this.data.name)
    Homepage.getGender().select(this.data.gender)
    Homepage.gettwowaydatabinding().should('have.value',this.data.name)
    Homepage.getshopbutton().click()

this.data.mobilename

this.data.mobilename.forEach(function(element) {
    cy.selectProduct(element)
    
});



})


})