import HomePageBase from "./homePageBase";

class HomePageMobile extends HomePageBase {
  constructor() {
    super();
  }

  openNavigation() {
    cy.contains("Open main menu").click();
  }

  closeNavigation() {
    cy.contains("Close main menu").click();
  }

  getPrimaryNavigationItems(): Cypress.Chainable {
    return cy.get("#main-menu-content").find("a, button");
  }

  getSecondaryNavigationLinkByText(text: string) {
    return cy.get("#main-menu > a").contains(text);
  }
}

export default HomePageMobile;
