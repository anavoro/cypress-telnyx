import HomePageBase from "./homePageBase";

class HomePageDesktop extends HomePageBase {
  constructor() {
    super();
  }

  getViewName() {
    return "Desktop";
  }

  getNavItem(text: string) {
    return cy.contains("a, button, span", text);
  }

  verifyTopNavigationMenu(): this {
    Object.values(this.topNavigationItems).forEach((item) => {
      this.getNavItem(item).should("exist");
    });
    return this;
  }

  verifyMainNavigation(): this {
    Object.values(this.navigationItems).forEach((item) => {
      this.getNavItem(item).should("exist");
    });
    return this;
  }
}

export default HomePageDesktop;
