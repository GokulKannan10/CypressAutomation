

/// <reference types = "Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})


describe('my second testsuite', function () {
    
    it('my second testcase', function () {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

       cy.get('[value="radio1"]').check().should('be.checked')

       //hiding and unhiding
       cy.get('#displayed-text').should('be.visible')
       cy.get('#hide-textbox').click()
       cy.get('#displayed-text').should('not.be.visible')
       cy.get('#show-textbox').click()
       cy.get('#displayed-text').should('be.visible')

       //handling alerts
       cy.get('[value="Alert"]').click()
      
       cy.on('window:alert' , (str)=>{

        expect(str).to.equal('Hello , share this practice page and share your knowledge')
        
        //handling confirm button
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(str) =>{
        expect(str).to.equal('Hello , Are you sure you want to confirm?')

        //child window

        cy.get('#opentab').invoke('removeAttr', 'target').click()

        //if i want to perform any actions i need to give this line

        cy.origin('https://www.qaclickacademy.com/' ,()=>{ //any actions needs to perform in the child window 
            //should perform within this functon

            cy.get("#navbarSupportedContent a[href*='about']").click();


        })


        })



       })
 
      

        
      
    
    })
    
    })