import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import { Container, Content, Button, Text, } from 'native-base';

export default class Welcome extends Component {
    render(){
        return(
            <Container>
                <Image 
                    source={require('../images/bg.jpg')}
                    style={style.bgImage}
                >
                    <View style={style.centerContainer} >
                        <Button rounded block
                            style={
                                style.loginBtn
                            }
                            onPress={()=>{
                                this.props.navigator.push({
                                    screen: 'LoginScreen',
                                    animated: true, 
                                    animationType: 'fade',
                                    title: 'Login',
                                })
                            }}
                        >
                            <Text style={ style.loginBtnTxt }>login</Text>
                        </Button>
                        <Button rounded block
                            style={
                                style.loginBtn
                            }
                            onPress={()=>{
                                this.props.navigator.push({
                                    screen: 'Register',
                                    animated: true, 
                                    animationType: 'fade',
                                    title: 'Register',
                                })
                            }}
                        >
                            <Text style={ style.loginBtnTxt }>Register</Text>
                        </Button>
                    </View>
                </Image>
            </Container>
        );
    }
}

const style={
    bgImage: {   
        minWidth: Dimensions.get('window').width,
        flex: 1,
        resizeMode: 'cover'
    },
    centerContainer: {
        width: Dimensions.get('window').width,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    loginBtn:{
        borderWidth: 0,
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginBottom: 20,
    },
    loginBtnTxt:{
        fontSize: 18,
        color: '#fff',
    }
}