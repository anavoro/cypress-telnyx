import HomePageBase from "./homePageBase";

class HomePageMobile extends HomePageBase {
  constructor() {
    super();
  }

  getViewName() {
    return "Mobile";
  }

  getHamburgerMenu() {
    return cy
      .get(
        'button[aria-controls="main-menu-content"], button[aria-label*="menu"], button.hamburger-menu'
      )
      .filter(":visible")
      .first();
  }

  getNavItem(text: string) {
    return cy.contains("a, button, span", text);
  }

  openMobileMenu(): this {
    this.getHamburgerMenu().click();
    cy.get("#main-menu", { timeout: 5000 }).should("be.visible");
    return this;
  }

  verifyTopNavigationMenu(): this {
    this.openMobileMenu();

    Object.values(this.topNavigationItems).forEach((item) => {
      this.getNavItem(item).should("exist");
    });
    return this;
  }

  verifyMainNavigation(): this {
    this.openMobileMenu();

    Object.values(this.navigationItems).forEach((item) => {
      this.getNavItem(item).should("be.visible");
    });
    return this;
  }
}

export default HomePageMobile;
