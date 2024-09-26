describe('NavBar', () => {
  beforeEach(function () {
    cy.visit('http://127.0.0.1:3000')
  })

  context('testing the GitHub redirection', function () {
    it('clicks through to the new page', function () {
      cy.get('a[href*="github"]').invoke('removeAttr', 'target').click();
      cy.origin('https://github.com', () => {
        cy.url().should('include', '/kuenyuikwok1106')
      });
    })
  })

  context('testing the LinkedIn redirection', function () {
    it('verifies the href', function () {
      cy.get('a[href*="linkedin"]')
      .should('have.attr', 'href')
      .and('eq', 'https://www.linkedin.com/in/yui-kuen-kwok/')

      cy.get('a[href*="linkedin"]')
      // an <a> also has an 'href' property which always resolves
      // to the fully qualified URL. by asserting on this property
      // we are testing this element more thoroughly
      .should('have.prop', 'href')
      .and('equal', 'https://www.linkedin.com/in/yui-kuen-kwok/')
    })
  })

})