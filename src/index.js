import { Navigation } from 'react-native-navigation';

import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import SideDrawer from './screens/SideDrawer';
import LoginScreen from './screens/LoginScreen';

export default () => {
    Navigation.registerComponent('Screen1', () => Screen1);
    Navigation.registerComponent('Screen2', () => Screen2);
    Navigation.registerComponent('Screen3', () => Screen3);
    Navigation.registerComponent('Screen4', () => Screen4);
    Navigation.registerComponent('SideDrawer', () => SideDrawer);
    Navigation.registerComponent('LoginScreen', () => LoginScreen);

    //Navigation.startTabBasedApp({
    //    tabs: [
    //        {
    //            label: 'One',
    //            screen: 'Screen1',
    //            icon: require('./images/icon1.png'),
    //            selectedIcon: require('./images/icon1_selected.png'),
    //            title: 'Screen One',
    //            navigatorButtons: {
    //                leftButtons: [
    //                    {
    //                        icon: require('./images/menu_icon.png'),
    //                        title: "Menu",
    //                        id: "sideDrawerToggle"
    //                    }
    //                ]
    //            }
    //        },
    //        {
    //            label: 'Two',
    //            screen: 'Screen2',
    //            icon: require('./images/icon2.png'),
    //            selectedIcon: require('./images/icon2_selected.png'),
    //            title: 'Screen Two',
    //            navigatorButtons: {
    //                leftButtons: [
    //                    {
    //                        icon: require('./images/menu_icon.png'),
    //                        title: "Menu",
    //                        id: "sideDrawerToggle"
    //                    }
    //                ]
    //            }
    //        }
    //    ],
    //    drawer: {
    //        left: {
    //            screen: "SideDrawer"
    //        }
    //    }
    //});
    Navigation.startSingleScreenApp({
        screen: {
            screen: "LoginScreen",
            title: "Login"
        }
    });
};