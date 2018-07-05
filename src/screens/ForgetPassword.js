import React, { Component } from 'react';
import { View, Image, } from 'react-native';
import { Container, Content, Button, Text, Form, Item, Label, Input, Footer  } from 'native-base';
import startMainTabs from './startMainTabs';
import MainScreen from './MainScreen';
export default class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otpSent: false,
            otpEntered: false,
            otp: null,
        };
        
    }
    toMainScreen = () => {
        MainScreen();
    };
    renderNumberForm = ()=>{
        return (
            <View>
                <Form>
                    <Item floatingLabel>
                        <Label>Phone or Email</Label>
                        <Input />
                    </Item>
                    <View style={style.btnRight} >
                        <Button rounded
                            onPress={()=>{this.setState({otpSent: true})}}
                        >
                            <Text>
                                Next
                            </Text>
                        </Button>
                    </View>
                </Form>  
            </View>
        );
    };
    renderOtpScreen = ()=>{
        return (
            <View>
                <Form>
                    <Item floatingLabel>
                        <Label>Enter OTP</Label>
                        <Input />
                    </Item>
                    <View style={style.btnRight} >
                        <Button rounded
                            onPress={()=>{this.setState({otpEntered: true})}}
                        >
                            <Text>
                                Next
                            </Text>
                        </Button>
                    </View>
                </Form>  
            </View>
        );
    };
    renderResetPassword = ()=>{
        return (
            <View>
                <Form>
                    <Item floatingLabel>
                        <Label>Enter Password</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label>Re-enter Password</Label>
                        <Input />
                    </Item>
                    <View style={style.btnView} >
                        <Button block rounded
                            onPress={this.toMainScreen}
                        >
                            <Text>
                                Reset Password
                            </Text>
                        </Button>
                    </View>
                </Form>  
            </View>
        );
    }
    render() {
        const {
            otpSent,
            otpEntered
        } = this.state;
        return (
            <Container>
            <Content >
                { !otpSent && !otpEntered && this.renderNumberForm() }
                { otpSent && !otpEntered && this.renderOtpScreen() }
                { otpSent && otpEntered && this.renderResetPassword() }
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
    },
    btnRight:{
        padding: 10,
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
}
