import HomePageBase from "./pages/homePageBase";
import HomePageDesktop from "./pages/homePageDesktop";
import HomePageMobile from "./pages/homePageMobile";

describe("Navigation Tests", () => {
  const testSuiteConfigurations = [
    {
      viewType: "Desktop",
      pageObject: HomePageDesktop,
      viewportWidth: 1920,
      viewportHeight: 1080,
    },
    {
      viewType: "Mobile",
      pageObject: HomePageMobile,
      viewportWidth: 375,
      viewportHeight: 667,
    },
  ];

  testSuiteConfigurations.forEach((config) => {
    describe(`${config.viewType} view`, () => {
      let homePage: HomePageBase;

      beforeEach(() => {
        cy.viewport(config.viewportWidth, config.viewportHeight);
        homePage = new config.pageObject();
        homePage.visitHomePage();
      });

      it(`primary navigation contains the correct items in ${config.viewType} view`, () => {
        homePage.openNavigation();

        const expectedNavItems = [
          "Products",
          "Solutions",
          "Pricing",
          "Why Telnyx",
          "Resources",
          "Developers",
        ];

        homePage
          .getPrimaryNavigationItems()
          .should("be.visible")
          .each(($item, index) => {
            const validIndex = index as number;
            cy.wrap($item).should("have.text", expectedNavItems[validIndex]);
          });

        homePage.closeNavigation();
      });

      it(`secondary navigation contains the correct items in ${config.viewType} view`, () => {
        homePage.openNavigation();

        const expectedNavItems = [
          { text: "SETI", link: "https://seti.telnyx.com" },
          { text: "Shop", link: "https://shop.telnyx.com" },
          { text: "Contact us", link: "/contact-us" },
          { text: "Log in", link: "https://portal.telnyx.com" },
        ];

        expectedNavItems.forEach((item) => {
          homePage
            .getSecondaryNavigationLinkByText(item.text)
            .should("have.attr", "href", item.link);
        });

        homePage.closeNavigation();
      });
    });
  });
});
