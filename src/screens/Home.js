import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import { Container, Content, Button, Text, Header, Left, Icon } from 'native-base';

export default class Home extends Component {
    render(){
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent
                        onPress={() => this.props.navigator.toggleDrawer({
                            side: 'left',
                            animated: true
                        })}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                </Header>
                <Content>
                </Content>
            </Container>
        );
    }
}
