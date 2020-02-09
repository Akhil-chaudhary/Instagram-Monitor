import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ImageBackground,
  ScrollView,
  Button,
  Alert
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import {
  TextInput,
  TouchableOpacity,
  FlatList,
  LongPressGestureHandler
} from "react-native-gesture-handler";
import { Card } from "react-native-shadow-cards";
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: "",
      foll: "",
      data: "",
      post: ""
    };
  }
  handleSearch = () => {
    this.state.User = this.state.User.trim();
    console.log(this.state.User);

    this.fetchData();
  };
  fetchData = async () => {
    const response = await fetch("http://randomuser.me/api?result=1");
    // const response = await fetch(
    //   "https://graph.facebook.com/v3.2/17841405309211844?fields=business_discovery.username(bluebottle){followers_count,media_count}&access_token={access-token}"
    // );
    const json = await response.json();
    this.setState({
      // foll: json.results[0].business_discovery.followers_count,
      // post: json.results[0].business_discovery.media_count
      data: json.results[0].cell
    });
    // console.log(this.state.data);
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
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
              onChangeText={User => this.setState({ User })}
              value={this.state.User}
            ></TextInput>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={this.handleSearch}>
          <Text
            style={{
              color: "#FFF",
              fontWeight: "700",
              textShadowColor: "white"
            }}
          >
            SEACRH
          </Text>
        </TouchableOpacity>
        <ScrollView>
          <Card style={{ padding: 10, margin: 10 }}>
            <Text style={{ fontSize: 20 }}>{this.state.User}</Text>
            {/* <Text style={styles.text}>Followers: {this.state.foll}</Text>
            {/* <Text style={styles.text}>Posts: {this.state.post}</Text> */}
            <Text style={styles.text}>Test: {this.state.data}</Text>
          </Card>
          {/*           
          <Card style={{ padding: 10, margin: 10 }}>
          <Text style={{fontSize: 20}}>Type:Complaints</Text>
            <Text style={styles.text}>{key2[0]}:   {User2[0]}</Text>
            <Text style={styles.text}>{key2[6]}:   {User2[6]}</Text>
            <Text style={styles.text}>{key2[5]}:   {User2[5]}</Text>
            <Text style={styles.text}>{key2[4]}:   {User2[4]}</Text>
            <Text style={styles.text}>{key2[1]}:   {User2[1]}</Text>
            <Text style={styles.text}>{key2[9]}:   {User2[9]}</Text>
            <Text style={styles.text}>{key2[2]}:   {User2[2]}</Text>
            <Text style={styles.text}>{key2[10]}:   {User2[10]}</Text>
            <Text style={styles.text}>{key2[7]}:   {User2[7]}</Text>
            <Text style={styles.text}>{key2[8]}:   {User2[8]}</Text>
            <Text style={styles.text}>{key2[3]}:   {User2[3]}</Text>
            <Text style={styles.text}>{key2[11]}:   {User2[11]}</Text>
            <Text style={styles.text}>{key2[12]}:   {User2[12]}</Text>
            <Text style={styles.text}>{key2[13]}:   {User2[13]}</Text>
            <Text style={styles.text}>{key2[14]}:   {User2[14]}</Text>
           {/* {User.map(info => <Text>{info}</Text>)} 
            <Button
              onPress={() => {}}
              title="REVIEW"
              color="#1C8ADB"
            />
          </Card>
          <Card style={{ padding: 10, margin: 10 }}>
          <Text style={{fontSize: 20}}>Type:Lost E-FIR</Text>
            <Text style={styles.text}>{key3[0]}:   {User3[0]}</Text>
            <Text style={styles.text}>{key3[6]}:   {User3[6]}</Text>
            <Text style={styles.text}>{key3[5]}:   {User3[5]}</Text>
            <Text style={styles.text}>{key3[4]}:   {User3[4]}</Text>
            <Text style={styles.text}>{key3[1]}:   {User3[1]}</Text>
            <Text style={styles.text}>{key3[9]}:   {User3[9]}</Text>
            <Text style={styles.text}>{key3[2]}:   {User3[2]}</Text>
            <Text style={styles.text}>{key3[10]}:   {User3[10]}</Text>
            <Text style={styles.text}>{key3[7]}:   {User3[7]}</Text>
            <Text style={styles.text}>{key3[8]}:   {User3[8]}</Text>
            <Text style={styles.text}>{key3[3]}:   {User3[3]}</Text>
           {/* {User.map(info => <Text>{info}</Text>)} 
            <Button
              onPress={() => {}}
              title="REVIEW"
              color="#1C8ADB"
            />
          </Card> */}
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#1A1A1A"
  },
  form: {
    paddingTop: "50%",
    marginBottom: 20,
    marginHorizontal: 30
  },
  input: {
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 100,
    height: 50,
    paddingHorizontal: 30,
    fontSize: 20,
    color: "#fff",
    marginBottom: 20
  },
  button: {
    backgroundColor: "#1C8ADB",
    borderRadius: 20,
    height: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  gradient: {
    flex: 1
  },
  error: {
    color: "#ff0000",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center"
  },
  text: {
    color: "black",
    fontSize: 18
  }
});
