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

  visitHomePage(options?: Partial<Cypress.VisitOptions>) {
    cy.visit("/", options);
    return this;
  }

  getHeroTitle() {
    return cy.get("main section h1");
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

  getFooter() {
    return cy.get("footer");
  }

  goToContactUs() {
    cy.get('a[href="/contact-us"].c-bzrwjc').click();
    return this;
  }

  verifySignUpPage() {
    cy.url().should("eq", "https://telnyx.com/sign-up");
    cy.get("h1.c-PJLV.c-rMlRu.c-frvnKx")
      .should("be.visible")
      .and("have.text", "Create a Telnyx account");
    return this;
  }

  verifyHeaderSignUp() {
    cy.get('div#main-menu > a.c-bzrwjc > span[data-content="Sign up"]').click({
      force: true,
    });
    this.verifySignUpPage();
    return this;
  }

  verifyMainBodySignUp() {
    cy.get(
      'div.c-cxTTUp > a[href="/sign-up"] > span[data-content="Sign up"]'
    ).click();
    this.verifySignUpPage();
    return this;
  }

  verifyChatbot() {
    cy.get("div.c-bGYNvC > svg").click();
    cy.get("div.c-bCIlIy").should("be.visible");
    cy.get("textarea.c-fJsHXZ").type("Hello, Telnyx!");
    cy.contains("button", "Send message").click();
    cy.contains("div.c-bCIlIy", "Hello, Telnyx!").should("be.visible");
    cy.get('button[data-state="open"].c-cODSYQ').click();
    cy.get("div.c-bCIlIy").should("not.exist");
    return this;
  }

  abstract getViewName(): string;
  abstract verifyMainNavigation(): this;
  abstract verifyTopNavigationMenu(): this;
}

export default HomePageBase;
