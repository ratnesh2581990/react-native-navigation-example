import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left"
                });
            }
        }
    }
    handlePress = () => {
        this.props.navigator.push({
            screen: 'Screen3',
            title: 'Screen 3',
        });
    };

    render() {
        return (
            <Container
                backgroundColor="#F44336"
                onPress={this.handlePress}
            />
        );
    }
}

export default Screen;