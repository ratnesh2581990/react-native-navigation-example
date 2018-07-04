import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
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
            <TouchableOpacity
                onPress={this.handlelogout}
                style={{ width: 200, padding: 10 }}>
                <Text style={{ color: 'black' }}>Logout</Text>
       </TouchableOpacity>
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
