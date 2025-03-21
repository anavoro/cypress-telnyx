import HomePageBase from "./homePageBase";

class HomePageMobile extends HomePageBase {
  constructor() {
    super();
  }

  getViewName() {
    return "Mobile";
  }

  verifyTopNavigationMenu() {
    // some code for mobile
  }
}

export default HomePageMobile;
