import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ResultScreen from "./src/screens/ResultScreen";
import Splash from './src/screens/Splash';

const navigator = createStackNavigator(
  {
    Splash:Splash,
    Home: HomeScreen,
    Result:ResultScreen,
  },
  {
    initialRouteName: "Splash",
    headerMode: "none",
    defaultNavigationOptions: {
      title: "App",
    }
  }
);

export default createAppContainer(navigator);
