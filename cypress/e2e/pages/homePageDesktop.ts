import HomePageBase from "./homePageBase";

class HomePageDesktop extends HomePageBase {
  constructor() {
    super();
  }

  getViewName() {
    return "Desktop";
  }

  verifyTopNavigationMenu() {
    //some code for desktop
  }
}

export default HomePageDesktop;
