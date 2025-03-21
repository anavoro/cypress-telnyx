import HomePage from "./pages/homePage";
import HomePageDesktop from "./pages/homePageDesktop";
import HomePageMobile from "./pages/homePageMobile";

describe("Telnyx Homepage Tests", () => {
  const homePageOld = new HomePage();
  const homePageMobile = new HomePageMobile();
  const homePageDesktop = new HomePageDesktop();

  [homePageMobile, homePageDesktop].forEach((homePage) => {
    it(`should verify the top navigation elements in ${homePage.getViewName()} view`, () => {
      homePageOld.visitHomePage().verifyTopNavigationMenu();
    });
  });

  it("should load the homepage and check the title", () => {
    homePageOld.visitHomePage();
    cy.get("h1").should("be.visible");
    homePageOld.verifyPageTitle();
  });

  it("should verify the top navigation elements", () => {
    homePageOld.visitHomePage().verifyTopNavigationMenu();
  });

  it("should verify the main navigation menu", () => {
    homePageOld.visitHomePage().verifyMainNavigation();
  });

  it("should verify navigation in mobile view", () => {
    cy.viewport(375, 667);
    homePageOld.visitHomePage().verifyMainNavigation();
  });

  it.only("should verify top navigation in mobile view", () => {
    cy.viewport(375, 667);
    homePageOld.visitHomePage().verifyTopNavigationMenu();
  });

  it("should validate footer presence", () => {
    homePageOld.visitHomePage().verifyFooter();
  });

  it("verify footer mobile", () => {
    homePageMobile.verifyFooter();
  });
});
