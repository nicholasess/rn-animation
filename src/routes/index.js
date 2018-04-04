import { StackNavigator } from "react-navigation";

import Navigation1 from "./navigation1";
import Home from "./home";

export default StackNavigator(
  {
    Home: { screen: Home },
    Navigation1: { screen: Navigation1 }
  },
  {
    initialRouteName: "Navigation1"
  }
);
