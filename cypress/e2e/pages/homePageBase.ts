import PageBase from "./pageBase";

abstract class HomePageBase extends PageBase {
  constructor() {
    super();
  }

  protected navigationItems = {
    products: "Products",
    solutions: "Solutions",
    pricing: "Pricing",
    whyTelnyx: "Why Telnyx",
    resources: "Resources",
    developers: "Developers",
  };

  protected topNavigationItems = {
    seti: "SETI",
    shop: "Shop",
    contactUs: "Contact us",
    logIn: "Log in",
  };

  visitHomePage() {
    cy.visit("/");
    return this;
  }

  verifyPageTitle() {
    cy.title().should("include", "Telnyx");
    return this;
  }

  verifyHomepageLoaded() {
    cy.get("h1").should("be.visible");
    return this;
  }

  verifyPerformance() {
    cy.request("/").then((response) => {
      cy.wrap(response.duration).should("be.lessThan", 5000);
    });
    return this;
  }

  getNavigationItems() {
    return this.navigationItems;
  }

  getTopNavigationItems() {
    return this.topNavigationItems;
  }

  verifyFooter() {
    cy.get("footer").should("be.visible");
    cy.get("footer").contains("©");
    return this;
  }

  verifyContactUs() {
    cy.get('a[href="/contact-us"].c-bzrwjc').click();
    cy.url().should("eq", "https://telnyx.com/contact-us");
    cy.get("h1.c-PJLV.c-rMlRu.c-hLiKYq")
      .should("be.visible")
      .and("have.text", "Talk to an expert");
  }

  abstract getViewName(): string;
  abstract verifyMainNavigation(): void;
  abstract verifyTopNavigationMenu(): void;
}

export default HomePageBase;
