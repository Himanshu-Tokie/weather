// App.js
import React from "react";
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useGetPokemonByNameQuery, useLazyGetPokemonByNameQuery } from "./src/rtk";
import { FETCH_DATA } from "./src/action";
import { fetchPokemon } from "./src/store";
// import { fetchPokemon } from "./src/store";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Circle, Svg } from 'react-native-svg';

export default function App() {
  const dispatch = useDispatch();
  const selector = useSelector(state=>state)
  console.log((selector),13);
  // console.log(selector.results[0].picture.large,13);
  
  const fetchData = () => {
    dispatch(FETCH_DATA());
  };
  
  // const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
const [getUsers, results] = useLazyGetPokemonByNameQuery('bulbasaur');
  // console.log(data,error,69);
  // data = ['adf']

  const fetchDataAndDispatch = () => {
    getUsers(1)
    if (!results.isLoading && !results.error && results.data) {
      dispatch(fetchPokemon(results.data));
    }
  };
  const width = useSharedValue(10)

  function handleWidth(){
    translateX.value=withSpring(translateX.value+20)
  }
  const translateX = useSharedValue(0)
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value * -2) }],
  }));

  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      {/* <View>
        <Button title="Fetch Data" onPress={fetchData} />
        <Text>{JSON.stringify(selector.myReducer.saga)}</Text>
      </View> */}
      {/* <View style={styles.imageContainer}>
        {Object.keys(selector).length !== 0 &&
        <Image source={{uri:selector.results[0].picture.large}} style={styles.image}></Image>}
      </View> */}
      {/* <View>
        <Button title="Fetch Data Through Toolkit" onPress={fetchDataAndDispatch} />
        <Text>{JSON.stringify(selector.pokemonApi)}</Text>
      </View> */}
      <Animated.View
      style={[styles.box,animatedStyles]}
    />
    <Button title="Width Handler" onPress={handleWidth}></Button>
    <View style={styles.circleContainer}>
    <Svg height="50%" width="50%" viewBox="0 0 100 100" >
      <Circle cx="50" cy="50" r="10" fill="red" /></Svg>
    </View>
    <View style={styles.container}>
      <Svg height="50%" width="50%" viewBox="0 0 100 100" >
        <Circle cx="50" cy="50" r="50" stroke="purple" strokeWidth=".5" fill="violet" />
      </Svg>
    </View>
    <Button title="Width Handler" onPress={handleWidth}></Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
  },
  image:{
    height:50,
    width:50,
  },
  imageContainer:{
    // alignContent:'center',
    alignItems:'center',
    // justifyContent:'center'
  },
  box:{
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 50,
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20, // Adjust the margin as needed
  },
});

// import React from "react";
// import { Button, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
// import { useDispatch } from "react-redux";
// import { useGetPokemonByNameQuery } from "./src/rtk";
// import { FETCH_DATA } from "./src/action";
// // import { fetchPokemon } from "./src/store";

// export default function App() {
//   const dispatch = useDispatch();
//   const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

//   const fetchDataAndDispatch = () => {
//     // if (!isLoading && !error && data) {
//     //   console.log(data,100);
      
//       dispatch(FETCH_DATA(data));
//     // }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         <View>
//           <Button title="Fetch Data1" onPress={fetchDataAndDispatch} />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
