import React, { Component } from "react";
import { View } from "react-native";
import { Container, Content } from "native-base";
import { MainHeader } from "../common";

export default class Profile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Container>
                <MainHeader navigationProps={this.props.navigator } title={'Profile'} />
                <Content>
                    <View style={{flex: 1, backgroundColor: '#ffcccc',}}>

                    </View>
                </Content>
            </Container>
        );
    }
}