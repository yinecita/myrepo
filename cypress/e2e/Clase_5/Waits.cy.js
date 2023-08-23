const constants = require('../../support/constants');

describe('Precondiciones - Actividad Complementaria 5 - Yinet', () => {
    beforeEach('', () => {
        cy.visit('');
        cy.get('[id="registertoggle"]').dblclick();
        cy.get('#user').type(`pushingit`);
        cy.get('input#pass').type('123456!');
        cy.contains('Log in').click();
        cy.get(`[id*='user_pushingit']`).should('exist')
        cy.get('#waitslink').click()
        cy.get('button#wait').dblclick()
    })

  	it("Debería validar la 1ra espera", () =>{
			// Verificar que el boton 'cargando' su texto vuelva a ser 'button'. ('have.text')
            cy.get('#wait',{ timeout: constants.TIMEOUT}).should('have.text', 'Button');
	})
  
    it("Debería validar la segunda espera", () =>{
			// verificar que exista un elemento cuyo texto sea 'Wait 5 more seconds' ('have.text')
            cy.get('#colorChangeMessage', { timeout: constants.TIMEOUT }).should('have.text', 'Wait 5 more seconds')
	})
  
    it("Debería validar la 3ra espera", () => {
			// Verificar que el primer mensaje que aparece a los 10 luego de 5 segundos mas sea diferente. (que cambie el mensaje) ('have.text') 2 lineas de codigo
            cy.get('#message', { timeout: constants.TIMEOUT }).should('have.text', 'You have waited for ten seconds, CONGRATULATIONS');
            cy.get('#message', { timeout: constants.TIMEOUT }).should('not.equal', 'You have waited for ten seconds, CONGRATULATIONS')
            //cy.get('#message', { timeout: constants.TIMEOUT }).should('equal', 5)
    })
});