import React, { Component } from "react";
import { View, Dimensions, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native";
import { Button, Icon , Text } from 'native-base';
import App from "../index";

class SideDrawer extends Component {
    handlelogout = () => {
        App();
    };
  render() {
    return (
      <View
        style={[
          styles.container,
          { width: Dimensions.get("window").width * 0.8 }
        ]}
      >
        <Button block transparent
          onPress={this.handlelogout}
          style={{ width: 200, padding: 10 }}
        >
          <Text style={{ color: 'black' }}>Logout</Text>
       </Button>
       <Button block transparent
        onPress={
          ()=>{
          this.props.navigator.push({
            screen: 'Profile',
            navigatorStyle: { navBarHidden: true },
          });
          this.props.navigator.toggleDrawer();
          }
        }
       >
          <Icon name='arrow-back' />
          <Text>Profile</Text>
       </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    backgroundColor: "white",
    flex: 1
  }
});

export default SideDrawer;
