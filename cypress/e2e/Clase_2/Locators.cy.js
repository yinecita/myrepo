//todos los selectores deben ser modificados y utilizar una expresion diferente ya sea con
//css selector o con un metodo de cypress

/// <reference types="cypress" />
describe("Actividad complementaria 2 - Yinet", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Cambiando selectores propuestos', () =>{
        cy.visit('https://pushing-front.vercel.app/');  //visit website
        cy.get('#user').type(`pushingit${numero}`);     //insert user
        
        cy.get('[id="user"]').clear();                  //clear user textbox 
        cy.get('[cy-get="user"]').type(`pushingit${numero}`);   //insert user againg
        cy.get('input#pass').type('123456!');           //insert pass
        //cy.get('div[role="radiogroup"]').children('div').children('label').contains('span','Male').siblings('input').check({force:true})
        cy.get("input[type='radio']").check({force:true})       //checking all three radiobuttons, one at the time
        cy.get('[name$=y]').select('15')                        //selecting Day, name value finishes with "y"
        //cy.get('div').children('div').children('select[name="month"]').select('September')
        cy.get('div[class="chakra-select__wrapper css-1llkhy0"]').children('select[name="month"]').select(6);   //selecting Month, using children of div
        cy.get('[name^=ye]').select(64)     //selecting Year, name value begins with "ye"
        cy.contains('button[type="submit"]', 'Regis',).click()  //searching button where text = Regis, and clicking it
        cy.wait(5000);
    });
});