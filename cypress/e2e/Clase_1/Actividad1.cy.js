/// <reference types="cypress"/>

describe("Primer test con cypress",()=> {

    const numeroRandom = Math.floor(Math.random() * 1000)
    let nombre = `Comision9${numeroRandom}`;

    it('Deberia registrar un usuario satisfactoriamente', () => {
        cy.visit('');
        cy.get('#user').type('Yinecita');
        cy.get('#pass').type('Pass123456789*'); 
        cy.get('[Value="Female"]').check({force:true});
        cy.get('#day').select("15");    
        cy.get('#month').select("July"); 
        cy.get('#year').select("1985"); //select
        cy.get('#submitForm').click();

    })
})