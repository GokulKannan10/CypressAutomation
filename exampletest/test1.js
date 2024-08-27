/// <reference types = "Cypress" />

describe('my first testsuite', function () {
    
it('my first testcase', function () {

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    //cy.get('.product:visible').should('have.length', 4)
    //cy.get('.products').find('.product').should('have.length', 4)

  // cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

    cy.get('.products').find('.product').each(($el, index, $list) => {
       const vegtext=$el.find('h4.product-name').text()
       if (vegtext.includes('Cashews')) {
       cy.wrap($el).find('button').click()

       }

    })
    cy.get('.cart-icon > img').click()

  cy.get('.action-block').contains('PROCEED TO CHECKOUT').click()
  cy.contains('Place Order').click()
  cy.get('select').select('Australia').should('have.value','Australia')
  cy.get('.chkAgree').check()

  /*cy.get('dynamic dropdown css selector').type(any partial text)
cy.get('common css selector for suggestions from the dropdown after partial text')
.each(($el, index, $list) => {
if ($e1.text()==="India")

{
$e1.click()
}
)}*/

cy.contains('Proceed').click()

})

})