import HomePage from "./pages/homePage";

describe("Telnyx Homepage Tests", () => {
  const homePage = new HomePage();

  it("should load the homepage and check the title", () => {
    homePage.visitHomePage();
    cy.get("h1").should("be.visible");
    homePage.verifyPageTitle();
  });

  it("should verify the top navigation elements", () => {
    homePage.visitHomePage().verifyTopNavigationMenu();
  });

  it("should verify the main navigation menu", () => {
    homePage.visitHomePage().verifyMainNavigation();
  });

  it("should verify navigation in mobile view", () => {
    cy.viewport(375, 667);
    homePage.visitHomePage().verifyMainNavigation();
  });

  it("should verify top navigation in mobile view", () => {
    cy.viewport(375, 667);
    homePage.visitHomePage().verifyTopNavigationMenu();
  });

  it("should validate footer presence", () => {
    homePage.visitHomePage().verifyFooter();
  });
});
