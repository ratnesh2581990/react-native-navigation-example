import React, { Component } from 'react';
import { View, Image, } from 'react-native';
import { Container, Content, Button, Text, Form, Item, Label, Input, Footer  } from 'native-base';
import startMainTabs from './startMainTabs';

class LoginScreen extends Component {
    handlelogin = () => {
        startMainTabs();
    };

    render() {
        return (
            <Container>
            <Content >
                <Form>
                    <Item floatingLabel>
                        <Label>Phone or Email</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input />
                    </Item>
                </Form>  
                <View style={style.btnView} >
                    <Button block rounded
                        onPress={this.handlelogin}
                    >
                        <Text>
                            Login
                        </Text>
                    </Button>
                </View>
                <View style={style.doubleBtn}>
                    <Button transparent onPress={()=>{
                            this.props.navigator.push({
                                screen: 'ForgetPassword',
                                animated: true, 
                                animationType: 'fade',
                                title: 'Forget Password',
                            })
                        }}
                    >
                        <Text>
                            Forget Password
                        </Text>
                    </Button>
                    <Button transparent onPress={()=>{
                            this.props.navigator.push({
                                screen: 'Register',
                                animated: true, 
                                animationType: 'fade',
                                title: 'Register',
                            })
                        }}
                    >
                        <Text>
                            Register
                        </Text>
                    </Button>
                </View>
            </Content>
        </Container>
        );
    }
}

const style = {
    btnView: {
        padding: 10,
        paddingTop: 30,
    },
    doubleBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}

export default LoginScreen;