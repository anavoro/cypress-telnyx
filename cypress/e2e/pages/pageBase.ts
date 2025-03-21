class PageBase {
  visit(path: string = "") {
    cy.visit(path);
    return this;
  }

  waitForPageLoad() {
    cy.get("body").should("be.visible");
    cy.url().should("not.be.empty");
    return this;
  }

  getElement(selector: string) {
    return cy.get(selector);
  }

  getByTestId(testId: string) {
    return cy.get(`[data-testid="${testId}"]`);
  }

  containsText(text: string) {
    return cy.contains(text);
  }
}

export default PageBase;
