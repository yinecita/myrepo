/// <reference types="cypress" />

describe("Actividad complementaria 3", () =>{
    // instalar la dependencia cypress-xpath
    // remplazar todos los selectores 'cssSelectors' por expresiones xpath
    // recorda usar el metodo cy.xpath y agregar la dependencia en el archivo e2e.

    it('Actividad complementaria 3', () =>{
        cy.visit('');

        //cy.contains('Iniciá sesión').dblclick()
        cy.xpath(`//span[contains(text(), 'Ini')]`).dblclick(); 

        //cy.get('#user').type(`pushingit`);
        cy.xpath(`//input[@id="user"]`).type(`pushingit`);

        //cy.get('#pass').type('123456!');
        cy.xpath(`//label[@for="pass"]//following-sibling::input`).type('123456!'); 

        //cy.get('#submitForm').click();
        cy.xpath('/html/body/div/div/div/div/form/button').click();

        //cy.get('#todolistlink').click()
        cy.xpath(`//a[starts-with(@id,'to')]`).click();

        //cy.get("[id^='sen']").type("tarea 1");
        cy.xpath(`//div[@role="group"]//child::input`).type('Actividad Complementaria 3');

        //cy.get('#sendTask').click()
        cy.xpath(`//button[text()='Send']`).click();

        //cy.contains('tarea 1').click()
        cy.xpath(`//button[text()='Delete']//preceding-sibling::p`).click();
    });
});
//Si queres practicar mas podes rehacer el desafio 1 cambiando todos los selectores que usaste por expresiones xpath!!!!
//https://drive.google.com/drive/u/1/folders/1HLb8ZVjPq207-iu3HGo9ugy4c3qOgB0S