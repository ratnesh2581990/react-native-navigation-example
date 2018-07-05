import React, { Component } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { SmallProduct } from './SmallProduct';

class HorizontalScroll extends Component {
    render(){
        return(
            <ScrollView horizontal={true} >
               <SmallProduct />
               <SmallProduct />
               <SmallProduct />
               <SmallProduct />
               <SmallProduct />
               <SmallProduct />
               <SmallProduct />
               <SmallProduct />
               <SmallProduct />
               <SmallProduct />
            </ScrollView>
        );
    }
}
export { HorizontalScroll };