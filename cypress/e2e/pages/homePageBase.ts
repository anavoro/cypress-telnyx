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
  abstract verifyMainNavigation(): void;
  abstract verifyTopNavigationMenu(): void;
}

export default HomePageBase;
