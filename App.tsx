// App.js
import React from "react";
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_DATA, FETCH_DATA1 } from "./src/action";

export default function App() {
  const dispatch = useDispatch();
  const selector = useSelector(state=>state)
  // console.log(JSON.stringify(selector),13);
  // console.log(selector.results[0].picture.large,13);
  
  const fetchData = () => {
    dispatch(FETCH_DATA());
  };
  
  const fetchData1 = () => {
    dispatch(FETCH_DATA1());
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View>
        <Button title="Fetch Data" onPress={fetchData} />
        <Text>{JSON.stringify(selector)}</Text>
      </View>
      <View style={styles.imageContainer}>
        {Object.keys(selector).length !== 0 &&
        <Image source={{uri:selector.results[0].picture.large}} style={styles.image}></Image>}
      </View>
      <View>
        <Button title="Fetch Data1" onPress={fetchData1} />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
    height:50,
    width:50,
  },
  imageContainer:{
    // alignContent:'center',
    alignItems:'center',
    // justifyContent:'center'
  }
});

