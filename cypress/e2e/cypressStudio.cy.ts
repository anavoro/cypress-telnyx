describe("Cypress Studio Demo", () => {});

/* ==== Test Created with Cypress Studio ==== */
it("mainPage.cy.ts", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("https://telnyx.com/");
  cy.get('div.c-UazGY > [href="/"] > svg').click();
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('.c-fTMFJx > .c-UazGY').click();
  cy.get('#main-menu > [href="https://seti.telnyx.com"]').click();
  cy.get('#main-menu > [href="https://shop.telnyx.com"]').click();
  cy.get('#main-menu > [href="/contact-us"]').click();
  cy.get('#main-menu > [href="https://portal.telnyx.com"]').click();
  /* ==== End Cypress Studio ==== */
});
