describe('Homepage', function() {
    it('passes smoketest', function() {
        cy.visit('/');
    });

    it('has no detectable a11y violations on load', () => {
        cy.visit('/');
        cy.injectAxe();
        cy.wait(500);
        cy.checkA11y();
    });
});
