import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Button, Text, Form, Item, Label, Input, Footer  } from 'native-base';
import MainScreen from './MainScreen';

export default class Register extends Component {
    handlelogin = () => {
        MainScreen();
    };
    render() {
      return (
        <Container>
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Name</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label>Phone</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input />
                    </Item>
                </Form>  
                <View style={style.btnView} >
                    <Button block rounded 
                    onPress={()=>{
                        this.handlelogin()
                    }}
                    >
                        <Text>
                            Register
                        </Text>
                    </Button>
                </View>
            </Content>
            <Footer style={{backgroundColor: 'transparent'}}>
                <Button block transparent 
                    onPress={()=>{
                        this.props.navigator.push({
                            screen: 'LoginScreen',
                            animated: true, 
                            animationType: 'fade',
                            title: 'Login',
                        })
                    }}
                >
                    <Text>
                        Already Register, Login
                    </Text>
                </Button>
            </Footer>
        </Container>
      )
    };
}

const style = {
    btnView: {
        padding: 10,
        paddingTop: 30,
    }
}
