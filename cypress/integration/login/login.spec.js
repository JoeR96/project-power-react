
describe('Logging', () => {
    it('Logs the user in and redirects to the dashboard page', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="emailAddressText"]')
            .type('test@test.com');

        cy.get('[data-testid="passwordText"]')
            .type('password');
        
        cy.get('[data-testid="emailAddressText"]')
            .should('have.value', 'test@test.com');

        cy.get('[data-testid="passwordText"]')
            .should('have.value', 'password');
        
        cy.get('[data-testid="submitButton"]')
            .click();
        
        cy.location('pathname').should('eq', '/Dashboard')

    });
});