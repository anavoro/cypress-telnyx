import PageBase from "./pageBase";

abstract class HomePageBase extends PageBase {
  constructor() {
    super();
  }

  verifyFooter() {
    cy.get("footer").should("be.visible");
    cy.get("footer").contains("©");
    return this;
  }

  abstract getViewName(): string;

  abstract verifyTopNavigationMenu(): void;
}

export default HomePageBase;
