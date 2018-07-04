import { Navigation } from 'react-native-navigation';

import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import SideDrawer from './screens/SideDrawer';
import LoginScreen from './screens/LoginScreen';
import Welcome from './screens/Welcome';
import Register from './screens/Register';
import ForgetPassword from './screens/ForgetPassword';
import Home from './screens/Home';
// import MainScreen from './screens/MainScreen';

export default () => {
    Navigation.registerComponent('Screen1', () => Screen1);
    Navigation.registerComponent('Screen2', () => Screen2);
    Navigation.registerComponent('Screen3', () => Screen3);
    Navigation.registerComponent('Screen4', () => Screen4);
    Navigation.registerComponent('SideDrawer', () => SideDrawer);
    Navigation.registerComponent('LoginScreen', () => LoginScreen);
    Navigation.registerComponent('Welcome', () => Welcome);
    Navigation.registerComponent('Register', () => Register);
    Navigation.registerComponent('ForgetPassword', () => ForgetPassword);
    // Navigation.registerComponent('MainScreen', () => MainScreen);
    Navigation.registerComponent('Home', () => Home);
    
    Navigation.startSingleScreenApp({
        screen: {
            screen: "Welcome",
            navigatorStyle: { navBarHidden: true },
        }
    });
};
