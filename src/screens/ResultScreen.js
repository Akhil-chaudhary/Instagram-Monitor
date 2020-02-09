import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ScrollView,
  Button,
  ImageBackground,
  Alert
} from "react-native";

import { Card } from "react-native-shadow-cards";
import { LinearGradient } from "expo-linear-gradient";
import {
  TextInput,
  TouchableOpacity,
  FlatList,
  LongPressGestureHandler
} from "react-native-gesture-handler";
export default class ResultScreen extends Component {
    state={
        foll:'',
        foll2:'',
        post:''
    }
  render() {
    Alert.alert(this.props.User);
    return (
        <View style={styles.container}>
        <ScrollView>
          <Card style={{ padding: 10, margin: 10 }}>
    <Text style={{fontSize: 20}}>{this.props.User}</Text>
            <Text style={styles.text}>Followers:{this.state.foll}</Text>
            <Text style={styles.text}>Following:{this.state.foll2}</Text>
            <Text style={styles.text}>Posts:{this.state.post}</Text>
           {/* {User.map(info => <Text>{info}</Text>)} */}
            <Button
              onPress={() => {}}
              title="REVIEW"
              color="#1C8ADB"
            />
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
      </View>
  );
}
}

const styles = StyleSheet.create({
split: {
  flexDirection: "row"
},
error: {
  position: "absolute",
  bottom: 0,
  color: "red",
  fontSize: 12
},
img: {
  position: "absolute",
  right: 10,
  bottom: 10,
  alignItems: "center",
  height: 50,
  width: 50
},
item: {
  alignItems: "center",
  fontSize: 20
},
tab: {
  flexDirection: "row",
  marginTop: 14,
  padding: 20,
  backgroundColor: "rgba(255,255,255,0.9)",
  borderRadius: 5
},
// map: {
//   padding: 100,
//   justifyContent: "flex-end",
//   alignItems: "center"
// },
container: {
    flex: 1,
    paddingTop:100,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#1A1A1A"
},
titleWrapper: {
  backgroundColor: "transparent",
  flex: 1,
  justifyContent: "center",
  alignItems: "center"
},
txtInput: {
  flex: 1
},
listItemContainer: {
  margin: 5,
  borderRadius: 5
},
listItem: {
  marginTop: 300,
  color: "black",
  fontSize: 20,
  padding: 10
},
text: {
  color: "black",
  fontSize: 18
},
form: {
  flex: 1,
  marginBottom: 60,
  marginHorizontal: 30
},
input: {
  borderBottomColor: "#1C8ADB",
  borderBottomWidth: 2,
  height: 40,
  fontSize: 20,
  color: "black"
},
drop: {
  fontSize: 20
},
entrybox: {
  flex: 1,
  marginHorizontal: 10,
  marginBottom: 20
},
button: {
  backgroundColor: "#1C8ADB",
  borderRadius: 40,
  height: 50,
  marginHorizontal: "10%",
  alignItems: "center",
  justifyContent: "center"
}
});
