import { ContactUsPage } from "./pages/contactUsPage";
import HomePageDesktop from "./pages/homePageDesktop";
import { SignUpPage } from "./pages/signUpPage";

describe("Telnyx Homepage Tests", () => {
  const homePageDesktop = new HomePageDesktop();
  const contactUsPage = new ContactUsPage();
  const signUpPage = new SignUpPage();

  it("should load the homepage and check the title", () => {
    homePageDesktop.visitHomePage({ timeout: 5 * 1000 });

    homePageDesktop
      .getHeroTitle()
      .should("have.text", "Experience AI-powered connectivity");
    homePageDesktop
      .getPageTitle()
      .should(
        "eq",
        "Telnyx - Global solutions for Communications, IOT, AI, Compute and Networking"
      );
  });

  it("verify footer desktop", () => {
    homePageDesktop
      .visitHomePage()
      .getFooter()
      .should("be.visible")
      .should("contain", "©");
  });

  it("should check the contact us form", () => {
    homePageDesktop.visitHomePage().goToContactUs();

    contactUsPage.getPageUrl().should("eq", "https://telnyx.com/contact-us");
    contactUsPage
      .getContactFormTitle()
      .should("be.visible")
      .should("have.text", "Talk to an expert");
  });

  it('should navigate to the sign-up page upon clicking "Sign up" in the header', () => {
    homePageDesktop.visitHomePage().getSignUpButtonInHeader().click();

    signUpPage.getPageUrl().should("eq", "https://telnyx.com/sign-up");
    signUpPage
      .getSignUpFormTitle()
      .should("be.visible")
      .should("have.text", "Create a Telnyx account");
  });

  it('should navigate to the sign-up page upon clicking "Sign up" in the main body', () => {
    homePageDesktop.visitHomePage().getSignUpButtonInHeader().click();

    signUpPage.getPageUrl().should("eq", "https://telnyx.com/sign-up");
    signUpPage
      .getSignUpFormTitle()
      .should("be.visible")
      .should("have.text", "Create a Telnyx account");
  });

  it("should verify Chatbot functionality", () => {
    homePageDesktop.visitHomePage().verifyChatbot();
  });
});
