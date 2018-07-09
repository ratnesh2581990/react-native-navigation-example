import React, { Component } from 'react';
import { View, Image, Alert } from 'react-native';
import { Container, Content, Button, Text, Form, Item, Label, Input, Footer, Toast  } from 'native-base';
import MainScreen from './MainScreen';

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            Name: '',
            Email: '',
            Phone: '',
            Password: '',
            ConfirmPassword: '',
            varifiedPhone: false,
            otp: '',
            otpSent: false,
            registered: false,
            regErr: '',
            inValidName: null,
            inValidEmail: null,
            inValidPhone: null,
            inValidPassword: null,
            inValidConfirmPassword: null,
            inValidNameMsg: null,
            inValidEmailMsg: null,
            inValidPhoneMsg: null,
            inValidPasswordMsg: null,
            inValidConfirmPasswordMsg: null,
            valid: false
        }
    }
    
    handlelogin = () => {
        
        console.log(Toast);
        
        this.regiserUser();
        if(this.state.registered){
            MainScreen();
        }else{
            Alert.alert(
                'Error',
                this.state.regErr,
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: true }
            )
        }
    };
    validation = ()=>{
        const {
            inValidName, 
            inValidEmail,
            inValidPhone,
            inValidPassword,
            inValidConfirmPassword
        } = this.state
        var emailVarify = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var phoneVarify = /^\d{10}$/;
        this.state.Name != '' ? this.setState({inValidName: false, inValidNameMsg: null}) : this.setState({inValidName: true, inValidNameMsg: 'Please Enter Your Name'});
        if(this.state.Email != ''){
            emailVarify.test(this.state.Email) ? this.setState({inValidEmail: false, inValidEmailMsg: null }) : this.setState({inValidEmail: true, inValidEmailMsg: 'Email is invalid'});
        }else{
            emailVarify.test(this.state.Email) ? this.setState({inValidEmail: false, inValidEmailMsg: null }) : this.setState({inValidEmail: true, inValidEmailMsg: 'Please Enter Your Email'});
        }

        if(this.state.Phone != ''){
            phoneVarify.test(this.state.Phone) ? this.setState({inValidPhone: false, inValidPhoneMsg: null}) : this.setState({inValidPhone: true, inValidPhoneMsg: 'Phone no. is invalid'});
        }else{
            phoneVarify.test(this.state.Phone) ? this.setState({inValidPhone: false, inValidPhoneMsg: null}) : this.setState({inValidPhone: true, inValidPhoneMsg: 'Please Enter Your Phone no.'});
        }
        
        this.state.Password.length > 5 ? this.setState({inValidPassword: false, inValidPasswordMsg: null}) : this.setState({inValidPassword: true, inValidPasswordMsg: 'Password Must Content min 6 character'});
        (this.state.ConfirmPassword === this.state.Password && !inValidPassword) ? this.setState({inValidConfirmPassword: false, inValidConfirmPasswordMsg: null}) : this.setState({inValidConfirmPassword: true, inValidConfirmPasswordMsg: "Password didn't Matched"});

        if(!inValidName && !inValidEmail && !inValidPhone && !inValidPassword && inValidConfirmPassword){
            this.handlelogin();
        }else{
            Alert.alert(
                'Error',
                'Fill all the details',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: true }
            )
        }

    }
    sendOtp = ()=> {

    }
    regiserUser = ()=> {
        const {
            Name,
            Email,
            Phone,
            Password,
            ConfirmPassword,
        } = this.state;
        fetch('https://protected-river-76442.herokuapp.com/users/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                name: Name,
                email: Email,
                phonenumber: Phone,
                password: Password,
                password2: ConfirmPassword,
                role: 'appUser'
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log('success', responseJson);
                this.setState({registered: true});
            })
            .catch((error) => {
                console.error('error', error);
                this.setState({regErr: error});
            });
    };
    renderForm = ()=>{
        const {
            Name,
            Email,
            Phone,
            Password,
            ConfirmPassword,
            inValidName,
            inValidEmail,
            inValidPhone,
            inValidPassword,
            inValidConfirmPassword,
            inValidNameMsg,
            inValidEmailMsg,
            inValidPhoneMsg,
            inValidPasswordMsg,
            inValidConfirmPasswordMsg,
        } = this.state;
        return(
            <View>
                <Form>
                    <Item floatingLabel error={inValidName}>
                        <Label>Name</Label>
                        <Input value={Name} 
                        onChangeText={value=>{this.setState({Name: value})}}
                        />
                    </Item>
                    <Text style={style.errMsg}>{inValidNameMsg}</Text>
                    <Item floatingLabel error={inValidEmail}>
                        <Label>Email</Label>    
                        <Input  keyboardType={'email-address'}  value={Email} onChangeText={value=>this.setState({Email: value})} />
                    </Item>
                    <Text style={style.errMsg}>{inValidEmailMsg}</Text>
                    <Item floatingLabel error={inValidPhone}> 
                        <Label>Phone</Label>
                        <Input keyboardType={'numeric'} maxLength={10} value={Phone} onChangeText={value=>this.setState({Phone: value})} />
                    </Item>
                    <Text style={style.errMsg}>{inValidPhoneMsg}</Text>
                    <Item floatingLabel error={inValidPassword}>
                        <Label>Password</Label>
                        <Input secureTextEntry={true} value={Password} onChangeText={value=>this.setState({Password: value})} />
                    </Item>
                    <Text style={style.errMsg}>{inValidPasswordMsg}</Text>
                    <Item floatingLabel error={inValidConfirmPassword}>
                        <Label>Confirm Password</Label>
                        <Input secureTextEntry={true} value={ConfirmPassword} onChangeText={value=>this.setState({ConfirmPassword: value})} />
                    </Item>
                    <Text style={style.errMsg}>{inValidConfirmPasswordMsg}</Text>
                </Form>  
                <View style={style.btnView} >
                    <Button block rounded 
                    onPress={()=>{
                        // this.handlelogin()
                        this.validation()
                    }}
                    >
                        <Text>
                            Register
                        </Text>
                    </Button>
                </View>
                <View style={{marginTop: 40}}>
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
                </View>
            </View>
        );
    }
    
    render() {
        const {
            otpSent
        } = this.state;
      return (
        <Container>
            <Content>
                {!otpSent}
                {this.renderForm()}
            </Content>
        </Container>
      )
    };
}

const style = {
    btnView: {
        padding: 10,
        paddingTop: 30,
    },
    errMsg: {
        paddingLeft: 15,
        fontSize: 12,
        color: 'red'
    }
}
