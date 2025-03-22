import HomePageBase from "./pages/homePageBase";
import HomePageDesktop from "./pages/homePageDesktop";
import HomePageMobile from "./pages/homePageMobile";

describe("Telnyx Homepage Tests", () => {
  it("should load the homepage and check the title", () => {
    homePageDesktop
      .visitHomePage()
      .verifyHomepageLoaded()
      .verifyPageTitle()
      .verifyPerformance();
  });

  const homePageMobile = new HomePageMobile();
  const homePageDesktop = new HomePageDesktop();
  const viewportConfigs = [
    { page: new HomePageMobile(), width: 375, height: 812 }, // iPhone X dimensions
    { page: new HomePageDesktop(), width: 1200, height: 800 },
  ];

  viewportConfigs.forEach(({ page, width, height }) => {
    describe(`Navigation Tests in ${page.getViewName()} view`, () => {
      beforeEach(() => {
        cy.viewport(width, height);
      });

      it(`should verify the top navigation elements`, () => {
        page.visitHomePage().verifyTopNavigationMenu();
      });

      it(`should verify the main navigation elements`, () => {
        page.visitHomePage().verifyMainNavigation();
      });
    });

    it("verify footer desktop", () => {
      homePageDesktop.visitHomePage().verifyFooter();
    });
  });
});

function expect(domComplete: any) {
  throw new Error("Function not implemented.");
}
