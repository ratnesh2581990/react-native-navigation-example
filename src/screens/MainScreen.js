import { Navigation } from 'react-native-navigation';

const MainScreen = ()=> {
    Navigation.startSingleScreenApp({
        screen: {
            screen: 'Home',
            navigatorStyle: { navBarHidden: true },
        },
        drawer: {
            left: {
                screen: "SideDrawer"
            }
        }
    })
}
export default MainScreen;
