// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {

  const url = 'http://localhost:8080/'
  it('Visits the app root url', () => {
    cy.visit(url);
    cy.contains('p', 'A long time ago in a galaxy far, far away...');
    cy.get('#play_menu').click();
  })
  it('Go to menu', () => {
    cy.visit(url);
    cy.get('#play_menu').click();
  })
  it('Go to game', () => {
    cy.visit(url + 'play');
    cy.get('#play').click();
  })
  it('Get random planet', () => {
    cy.visit(url + 'planets');
    cy.get('#randomPlanet').click();

  })
})
