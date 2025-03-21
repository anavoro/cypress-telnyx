class HomePage {
  visitHomePage() {
    cy.visit("/");
    return this;
  }

  verifyPageTitle() {
    cy.title().should("include", "Telnyx");
    return this;
  }

  static handleCookieBanner() {
    cy.get("button#cookiescript_close").should("be.visible").click();
  }

  verifyMainNavigation() {
    const menuItems = {
      products: "Products",
      solutions: "Solutions",
      pricing: "Pricing",
      whyTelnyx: "Why Telnyx",
      resources: "Resources",
      developers: "Developers",
    };

    cy.window().then((win) => {
      const width = win.innerWidth;

      if (width >= 992) {
        cy.get("body").then(() => {
          Object.values(menuItems).forEach((item) => {
            cy.contains("a, button, span", item).should("exist");
          });
        });
      } else {
        cy.get(
          'button[aria-controls="main-menu-content"], button[aria-label*="menu"], button.hamburger-menu'
        )
          .filter(":visible")
          .first()
          .click();

        cy.wait(500);
        Object.values(menuItems).forEach((item) => {
          cy.contains(item).should("be.visible");
        });
      }
    });

    return this;
  }
  verifyTopNavigationMenu() {
    const mobileNavSelectors = {
      seti: '#main-menu > [href="https://seti.telnyx.com"]',
      shop: '#main-menu > [href="https://shop.telnyx.com"]',
      contactUs: '#main-menu > [href="/contact-us"]',
      logIn: '#main-menu > [href="https://portal.telnyx.com"]',
    };

    const desktopNavItems = {
      seti: "SETI",
      shop: "Shop",
      contactUs: "Contact us",
      logIn: "Log in",
    };

    cy.window().then((win) => {
      const width = win.innerWidth;

      if (width >= 992) {
        Object.values(desktopNavItems).forEach((item) => {
          cy.contains("a, button, span", item).should("exist");
        });
      } else {
        cy.get(
          'button[aria-controls="main-menu-content"], button[aria-label*="menu"], button.hamburger-menu'
        )
          .filter(":visible")
          .first()
          .click();

        cy.get("#main-menu", { timeout: 5000 }).should("be.visible");

        Object.entries(mobileNavSelectors).forEach(([, selector]) => {
          cy.get(selector).should("be.visible");
        });
      }
    });

    return this;
  }

  verifyFooter() {
    cy.get("footer").should("be.visible");
    cy.get("footer").contains("©");
    return this;
  }
}

export default HomePage;
