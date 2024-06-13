/// <reference types="Cypress" />
describe('My First Test', function() {
    it('First Test Case', function() {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      //select radio button 3
      cy.get('[for="radio3"] > .radioButton').click()

      
      //Validate that only radio button 3 is selected
      cy.get('[for="radio1"] > .radioButton').should('not.be.checked')
      cy.get('[for="radio2"] > .radioButton').should('not.be.checked')
      cy.get('[for="radio3"] > .radioButton').should('be.checked')

      //Validate that only one radio button is selected
      cy.get('input[type="radio"]:checked').should('have.length', 1)
      
     //type 'South' in the field
     cy.get('#autocomplete').type('South')

     //Select South Africa from the list
     cy.get('.ui-menu-item div').each(($el, index, $list) => {
      if ($el.text() === "South Africa") {
        cy.wrap($el).click()
      }
    })
    
    //Verify that South Africa is selected
    cy.get('#autocomplete').should('have.value', 'South Africa')

    //Clear the field
    cy.get('#autocomplete').clear()

    //Type republic
    cy.get('#autocomplete').type('Republic')

    //select first option listed
    cy.get('.ui-menu-item div').first().click()

    //click all checkboxes
    cy.get('#checkBoxOption1').click()
    cy.get('#checkBoxOption2').click()
    cy.get('#checkBoxOption3').click()

   //Validate that all these checkboxes are checked
   cy.get('input[type="checkbox"]').each(($el) => {
   cy.wrap($el).should('be.checked')
  })
   //Uncheck the first checkbox
   cy.get('#checkBoxOption1').click()

   //Validate that the two are still checked

   cy.get('#checkBoxOption2').should('be.checked')
   cy.get('#checkBoxOption3').should('be.checked')

   //Click on the hide button
   cy.get('#hide-textbox').click()

   //Validate that the element is hidden
   cy.get('#displayed-text').should('not.be.visible')

   //Click on the show btton
   cy.get('#show-textbox').click()

   //Validate that the hidden element is shwown
   cy.get('#displayed-text').should('be.visible')

  //Validate that the amount for Joe Postman in Chennai is 46
  cy.get('.tableFixHead > #product > tbody > :nth-child(6) > :nth-child(1)').should('contain', 'Joe')
  cy.get('.tableFixHead > #product > tbody > :nth-child(6) > :nth-child(2)').should('contain', 'Postman')
  cy.get('.tableFixHead > #product > tbody > :nth-child(6) > :nth-child(3)').should('contain', 'Chennai')
  cy.get(':nth-child(6) > :nth-child(4)').should('contain','46')

//Validate that the total amount collected is 296
cy.get('.totalAmount').should('contain', '296')

//Verify that the number of rows is correct
cy.get('.tableFixHead > #product > tbody > tr').should('have.length', 9)

//Validate that iframe exists
cy.get('iframe').should('exist')

cy.get('iframe').then(iframe => {
  const body = iframe.contents().find('body')
  

})
 
  
    })
  })