import PageBase from "./pageBase";

export class SignUpPage extends PageBase {
  constructor() {
    super();
  }

  getSignUpFormTitle() {
    return cy.get("main section h1");
  }
}
