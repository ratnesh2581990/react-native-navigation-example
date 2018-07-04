import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Container from '../components/Container';
import startMainTabs from './startMainTabs';

class LoginScreen extends Component {
    handlelogin = () => {
        startMainTabs();
    };



    render() {
        return (
            <Container
                backgroundColor="#01446b">
                <Button
                onPress={this.handlelogin}
                    title="Login"
                    color="#841584"
                />
            </Container>
        );
    }
}

export default LoginScreen;