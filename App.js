import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import Splash from './src/screens/Splash';

const navigator = createStackNavigator(
  {
    Splash:Splash,
    Home: HomeScreen
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
