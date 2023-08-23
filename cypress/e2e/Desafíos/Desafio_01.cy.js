/// <reference types="cypress" />


describe("Desafío01 - Yinet", () =>{
    const numero = Math.floor(Math.random() * 1000)
    const numero1 = Math.floor(Math.random() * 2000)
    const numero2 = Math.floor(Math.random() * 3000)
    const numero3 = Math.floor(Math.random() * 4000)

    it('Visitando la URL', () =>{
        cy.visit('');       //visit website using baseURL
    });

    it('Registrando nuevo usuario', () =>{
        cy.get('#user').type(`pushingit${numero}`);                                         //typing user
        cy.get('input#pass').type('123456!');                                               //insert pass
        cy.get('[Value="Female"]').check({force:true});                                     //selecting gender
        cy.get('[name$=y]').select('15');                                                   //selecting Day, name value finishes with "y"
        cy.contains('label','Month').siblings('div').children('#month').select('July');     //selecting Month, using 3 cypress methods
        cy.get('[name^=ye]').select(64)                                                     //selecting Year, name value begins with "ye"
        cy.contains('button[type="submit"]', 'Regis',).click()                              //searching button where text = Regis, and clicking it
        cy.wait(5000);

    });

    it('Accediendo a la sección To Do List', () =>{
        cy.contains('To Do List').click();

    });

    it('Adicionar 3 nuevas tareas', () =>{
        cy.get('input#task').type(`Tarea${numero1}`);
        cy.get('button#sendTask').click();
        cy.get('input#task').type(`Tarea${numero2}`);
        cy.get('button#sendTask').click();
        cy.get('input#task').type(`Tarea${numero3}`);
        cy.get('button#sendTask').click();

    });

    it('Completar las tareas que se adicionaron previamente', () =>{
        cy.get('li[class^="css"]').first().click(); 
        cy.get('li[class^="css"]').last().click(); 
        cy.get('li[class^="css"]').first().next().click();

    });
});