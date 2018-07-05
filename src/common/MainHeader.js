import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Left, Body, Title, Icon, Button} from 'native-base';

const MainHeader = ({navigationProps, title})=>{
    
    return(
        <Header>
            <Left>
                <Button transparent
                onPress={() => navigationProps.toggleDrawer({
                    side: 'left',
                    animated: true
                })}>
                    <Icon name='menu' />
                </Button>
            </Left>
            <Body>
                <Title>{title}</Title>
            </Body>
        </Header>
    );
}

export { MainHeader };