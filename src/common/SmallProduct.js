import React, { Component } from 'react';
import { View, Image, Text, TouchableNativeFeedback } from 'react-native';
// import { width } from 'window-size';

class SmallProduct extends Component {
    render(){
        return(
            <TouchableNativeFeedback onPress={ ()=>{
                    console.log('pressed', this.props.link)
                }}>
                <View style={styles.Container} >
                    <Image style={[styles.ImageStyle, this.props.smallProductImageStyle]} source={ require( '../images/image.jpg' )} />
                    <Text style={styles.TextStyle}>
                        {this.props.name}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}
const styles = {
    Container: {
        flex: 1,
        // padding: 5,
        shadowColor : '#000',
        shadowOffset: {left: .2,top: .4},
        shadowRadius: 5,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        borderRadius: 3,
    },
    ImageStyle: {
        width: 140,
        height: 170,
    },
    TextStyle: {
        fontSize: 14,
        marginTop: 5,
        padding: 10,
    }
}
export { SmallProduct };