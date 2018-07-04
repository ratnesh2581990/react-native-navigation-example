import { Navigation } from 'react-native-navigation';

const startTabs = () => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "Screen1",
                    label: "Find Place",
                    title: "Find Place",
                    icon: require('../images/icon1.png'),
                    selectedIcon: require('../images/icon1_selected.png'),
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: require('../images/hamburger_icon.png'),
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: "Screen2",
                    label: "Share Place",
                    title: "Share Place",
                    icon: require('../images/icon2.png'),
                    selectedIcon: require('../images/icon2_selected.png'),
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: require('../images/hamburger_icon.png'),
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                }
            ],
            drawer: {
                left: {
                    screen: "SideDrawer"
                }
            }
        });
};

export default startTabs;