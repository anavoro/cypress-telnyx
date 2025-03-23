import HomePageDesktop from "./pages/homePageDesktop";

describe("Telnyx Homepage Tests", () => {
  const homePageDesktop = new HomePageDesktop();

  it("should load the homepage and check the title", () => {
    homePageDesktop.visitHomePage({ timeout: 5 * 1000 });

    homePageDesktop
      .getHeroTitle()
      .should("have.text", "Experience AI-powered connectivity");

    homePageDesktop
      .getPageTitle()
      .should(
        "equal",
        "Telnyx - Global solutions for Communications, IOT, AI, Compute and Networking"
      );
  });

  it("verify footer desktop", () => {
    homePageDesktop.visitHomePage().verifyFooter();
  });

  it("should check the contact us form", () => {
    homePageDesktop.visitHomePage().verifyContactUs();
  });

  it('should navigate to the sign-up page upon clicking "Sign up" in the header', () => {
    homePageDesktop.visitHomePage().verifyHeaderSignUp();
  });

  it('should navigate to the sign-up page upon clicking "Sign up" in the main body', () => {
    homePageDesktop.visitHomePage().verifyMainBodySignUp();
  });

  it("should verify Chatbot functionality", () => {
    homePageDesktop.visitHomePage().verifyChatbot();
  });
});
