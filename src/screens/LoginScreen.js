import React, { Component } from 'react';
import { View, Image, Alert } from 'react-native';
import { Container, Content, Button, Text, Form, Item, Label, Input, Footer, Spinner  } from 'native-base';
import startMainTabs from './startMainTabs';
import MainScreen from './MainScreen';

class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            Phone: '',
            inValidPhone: false,
            Password: '',
            inValidPhoneMsg: null,
            errMsgText: '',
            loading: false,
        };
    }
    handlelogin = () => {
        
        const {
            Phone,
            Password,
        } = this.state;
        fetch('https://protected-river-76442.herokuapp.com/users/applogin', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                phonenumber: Phone,
                password: Password,
                role: 'appUser'
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log('success', responseJson);
                this.setState({registered: true, loading: true});
                if(responseJson.success){
                    MainScreen();
                }else{
                    this.setState({errMsgText: responseJson.message });
                    console.log(this.state.errMsgText);
                    Alert.alert(
                        'Error',
                        this.state.errMsgText,
                        [
                            {text: 'OK', onPress: () => console.log('OK Pressed')},
                        ],
                        { cancelable: true }
                    )
                }

            })
            .catch((error) => {
                console.error('error', error);
                this.setState({regErr: error});
            });
        
    };

    
    validation = ()=>{
        const {
            inValidPhone,
        } = this.state;
        var phoneVarify = /^\d{10}$/;
        
        if(this.state.Phone != ''){
            phoneVarify.test(this.state.Phone) ? this.setState({inValidPhone: false, inValidPhoneMsg: null}) : this.setState({inValidPhone: true, inValidPhoneMsg: 'Phone no. is invalid'});
        }else{
            this.setState({inValidPhone: true, inValidPhoneMsg: 'Please Enter Your Phone no.'});
        }

        if( !inValidPhone  && this.state.Phone != ''){
            this.setState({loading: true});
            this.handlelogin();
        }else{
            // Alert.alert(
            //     'Error',
            //     'Ph',
            //     [
            //       {text: 'OK', onPress: () => console.log('OK Pressed')},
            //     ],
            //     { cancelable: true }
            // )
        }

    }

    render() {
        const {
            Phone, 
            Password,
            inValidPhoneMsg
        } = this.state
        return (
            <Container>
            <Content >
                <Form>
                    <Item floatingLabel>
                        <Label>Phone</Label>
                        <Input keyboardType={'numeric'} maxLength={10} value={Phone} onChangeText={value=>this.setState({Phone: value})} />
                    </Item>
                    <Text style={style.errMsg}>{inValidPhoneMsg}</Text>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input  secureTextEntry={true} value={Password} onChangeText={value=>this.setState({Password: value})}  />
                    </Item>
                </Form>  
                {this.state.loading ? <Spinner /> : <View /> }
                <View style={style.btnView} >
                    <Button block rounded
                        onPress={this.validation}
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
    },
    errMsg: {
        paddingLeft: 15,
        fontSize: 12,
        color: 'red'
    }
}

export default LoginScreen;