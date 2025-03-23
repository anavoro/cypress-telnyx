import HomePageDesktop from "./pages/homePageDesktop";
import HomePageMobile from "./pages/homePageMobile";

const viewportConfigs = [
  { page: new HomePageMobile(), width: 375, height: 812 }, // iPhone
  { page: new HomePageDesktop(), width: 1920, height: 1080 },
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
});
