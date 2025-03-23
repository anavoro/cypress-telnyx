import PageBase from "./pageBase";

export class ContactUsPage extends PageBase {
  constructor() {
    super();
  }

  getContactFormTitle() {
    return cy.get("main section h1");
  }
}
