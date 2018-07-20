import React, { Component } from "react";
import { View, Dimensions, StyleSheet, TouchableOpacity, TouchableNativeFeedback } from "react-native";
import { Button, Icon , Text } from 'native-base';
import App from "../index";

class SideDrawer extends Component {
    handlelogout = () => {
        App();
    };
  render() {
    return (
		<View style={[ styles.container,{ width: Dimensions.get("window").width * 0.8 } ]} >
			<View style={styles.sliderMenus}>
				<TouchableNativeFeedback onPress={this.handlelogout} >
					<Text style={{ color: 'black' }}>Logout</Text>
				</TouchableNativeFeedback>
			</View>
			<View style={styles.sliderMenus}>
				<TouchableNativeFeedback onPress={ ()=>{this.props.navigator.push({
							screen: 'Profile',
							navigatorStyle: { navBarHidden: true },
						});
						this.props.navigator.toggleDrawer();
					}}
					style={styles.sliderMenus} >
					<Text style={styles.menuText}>
						<Icon name='ios-person' /> Profile
					</Text>
				</TouchableNativeFeedback>
			</View>
		</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 22,
		backgroundColor: "white",
		flex: 1
	},
	sliderMenus:{
		padding: 10,
	},
	menuText: {
		textAlignVertical: 'center',
	}
});

export default SideDrawer;
