import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

export default class ForgetPassword extends Component {
    render() {
        return (
            <Container
                backgroundColor="#c95e0c"
                onPress={() => console.log('press')}
            />
        );
    }
}