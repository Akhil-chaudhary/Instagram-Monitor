import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  ImageBackground
} from "react-native";
import { LinearTextGradient } from "react-native-text-gradient";

import { LinearGradient } from 'expo-linear-gradient';
export default class Splash extends Component {
    componentDidMount() {
        setTimeout(()=>{this.props.navigation.navigate("Home")}, 1000);
      }
  render() {
    return (
      <View
        style={{ width: "100%", height: "100%", backgroundColor: "#1A1A1A" }}
      >
        <View style={styles.wrapper}>
          <View style={styles.titleWrapper}>
            <Image
              style={{ width: 80, height: 80 }}
              source={require("../../assets/logo.png")}
            />
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            {/* <LinearTextGradient
              style={styles.subtitle}
              locations={[0, 1]}
              colors={["#CFA556","#A137AF"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              INSTAGRAM
            </LinearTextGradient> */}
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "700",
    paddingBottom: 20
  },
  titleWrapper: {
    justifyContent: "center",
    flex: 1
  }
});
