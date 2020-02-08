import React,{Component} from "react";
import { Text, StyleSheet, KeyboardAvoidingView, View,ImageBackground} from "react-native";

import { LinearGradient } from 'expo-linear-gradient';
import {
  TextInput,
  TouchableOpacity,
  FlatList,
  LongPressGestureHandler
} from "react-native-gesture-handler";
export default class HomeScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          {/* <View style={styles.errorBox}>
            {this.state.errorMessage && (
              <Text style={styles.error}> {this.state.errorMessage} </Text>
            )}
          </View> */}

          <View style={styles.form}>
            <View>
              <TextInput
                placeholder="@username"
                placeholderTextColor="#fff"
                style={styles.input}
                autoCapitalize="none"
                // onChangeText={email => this.setState({ email })}
                // value={this.state.email}
              ></TextInput>
            </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
              <Text style={{ color: "#FFF", fontWeight: "700",textShadowColor:'white' }}>SEACRH</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%", height: "100%", backgroundColor: "#1A1A1A"
  },
  greeting: {
    marginTop: 32,
    marginBottom: 32,
    fontSize: 28,
    fontWeight: "bold",
    fontWeight: "400",
    textAlign: "center"
  },
  errorMessage: {
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
  },
  form: {
    marginBottom: 60,
    marginHorizontal: 30
  },
  input: {
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius:100,
    height: 50,
    paddingHorizontal:30,
    fontSize: 20,
    color: "#fff",
    marginBottom: 20
  },
  button: {
    backgroundColor: "#1C8ADB",
    borderRadius: 20,
    height: 40,
    paddingHorizontal:20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android

  },
  gradient: {
    flex: 1,
  },
  signup: {
    fontWeight: "600",
    color: "#1C8ADB"
  },
  error: {
    color: "#ff0000",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center"
  }
});
