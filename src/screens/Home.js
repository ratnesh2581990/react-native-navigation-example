import React, { Component } from 'react';
import { View, Image, Dimensions, ScrollView } from 'react-native';
import { Container, Content, Button, Text, Header, Left, Icon } from 'native-base';

import { MainHeader, SmallProduct } from '../common';
export default class Home extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const {
            catHeading,
            headingLinkContainer,
            greyBgView,
            grid,
            innerGridImage
        } = style;
        return(
            <Container>
                <MainHeader navigationProps={this.props.navigator }/>
                <Content>
                    <View style={headingLinkContainer} >
                        <Text style={catHeading}>
                            Shop By Category
                        </Text>
                        <Button small>
                            <Text>
                                View All
                            </Text>
                        </Button>
                    </View>
                    <ScrollView horizontal={true} >
                        <SmallProduct name={'Category 1'} link={'Category 1 link'} />
                        <SmallProduct name={'Category 2'} link={'Category 2 link'} />
                        <SmallProduct name={'Category 3'} link={'Category 3 link'} />
                        <SmallProduct name={'Category 4'} link={'Category 4 link'} />
                        <SmallProduct name={'Category 5'} link={'Category 5 link'} />
                        <SmallProduct name={'Category 6'} link={'Category 6 link'} />
                        <SmallProduct name={'Category 7'} link={'Category 7 link'} />
                        <SmallProduct name={'Category 8'} link={'Category 8 link'} />
                        <SmallProduct name={'Category 9'} link={'Category 9 link'} />
                        <SmallProduct name={'Category 10'} link={'Category 10 link'} />
                    </ScrollView>
                    <View style={greyBgView}>
                        <View style={headingLinkContainer} >
                            <Text style={catHeading}>
                                Featured Product
                            </Text>
                            <Button small>
                                <Text>
                                    View All
                                </Text>
                            </Button>
                        </View>
                        <ScrollView horizontal={true} >
                            <SmallProduct name={'product 1'} link={'product 1 link'} />
                            <SmallProduct name={'product 2'} link={'product 2 link'} />
                            <SmallProduct name={'product 3'} link={'product 3 link'} />
                            <SmallProduct name={'product 4'} link={'product 4 link'} />
                            <SmallProduct name={'product 5'} link={'product 5 link'} />
                            <SmallProduct name={'product 6'} link={'product 6 link'} />
                            <SmallProduct name={'product 7'} link={'product 7 link'} />
                        </ScrollView>
                    </View>
                    <View style={{paddingTop: 10, paddingBottom: 20}}>
                        <View style={grid} >
                            <SmallProduct smallProductImageStyle={innerGridImage} name={'product 1'} link={'product 1 link'} />
                            <SmallProduct smallProductImageStyle={innerGridImage} name={'product 2'} link={'product 1 link'} />
                        </View>
                        <View style={grid} >
                            <SmallProduct smallProductImageStyle={innerGridImage} name={'product 1'} link={'product 1 link'} />
                            <SmallProduct smallProductImageStyle={innerGridImage} name={'product 2'} link={'product 1 link'} />
                        </View>
                        <View style={grid} >
                            <SmallProduct smallProductImageStyle={innerGridImage} name={'product 1'} link={'product 1 link'} />
                            <SmallProduct smallProductImageStyle={innerGridImage} name={'product 2'} link={'product 1 link'} />
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}
const style = {
    catHeading: {
        padding: 10,
        fontSize: 16,
        color: '#111'
    },
    headingLinkContainer:{
        padding: 10,
        paddingBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    greyBgView:{
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#f1f1f1',
    },
    grid: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    innerGridImage:{
        flex: 1,
        width: null,
    }
}