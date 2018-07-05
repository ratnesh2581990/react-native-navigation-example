import React, { Component } from 'react';
import {
    View,
    Text,
    Image, 
    TouchableOpacity
} from 'react-native';
import { H1, H3, Card, CardItem, Left, Right, Body, Thumbnail, Button, Item, Icon } from 'native-base';

const Product = ({ productData }) =>{
    const { 
        thumb,
        title,
        description,
        broker_thumb,
        broker,
        price
    } = productData;
    const {
        container,
        image,
        innerItem,
        priceStyle,
        desc,
    } = style
    return(
        <Card>
            <CardItem cardBody>
                <Image source={{uri: thumb || "https://teenchallengesa.com/wordpress/wp-content/uploads/2016/08/Emad-page-3-e1508380070673.jpg"}} style={image}/>
            </CardItem>
            <CardItem >
                <Text style={desc}>
                    {description}
                </Text>
            </CardItem>
            <CardItem>
                <Left>
                    <Button large transparent>
                        <Thumbnail style={{marginRight: 10 }} source={ broker_thumb || require( '../images/image.jpg' ) } />
                        <Text>{broker}</Text>
                    </Button>
                </Left>
                <Right>
                    <Button transparent>
                        <Text style={{fontSize: 20,}}>$ {price}</Text>
                    </Button>
                </Right>
                <Right>
                    <Button transparent>
                        
                        <Icon style={{fontSize: 34,}} name="ios-cart-outline" />
                        <Text style={{fontSize: 20,}} > Buy</Text>
                    </Button>
                </Right>
            </CardItem>
        </Card>    
    );
}

const uri = '../images/image.jpg';
const style = {
    image: {height: 200, width: 100, flex: 1},
    priceStyle: {
        textAlign: 'right',
        color: 'red',
        flex: 1,
        fontSize: 20,
        justifyContent: 'flex-end',
    },
    desc: {
        // height: 30
    },
};

export {Product};