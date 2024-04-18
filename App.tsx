// App.js
import React from "react";
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useGetPokemonByNameQuery, useLazyGetPokemonByNameQuery } from "./src/rtk";
import { FETCH_DATA } from "./src/action";
import { fetchPokemon } from "./src/store";
// import { fetchPokemon } from "./src/store";

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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View>
        <Button title="Fetch Data" onPress={fetchData} />
        <Text>{JSON.stringify(selector.myReducer.saga)}</Text>
      </View>
      {/* <View style={styles.imageContainer}>
        {Object.keys(selector).length !== 0 &&
        <Image source={{uri:selector.results[0].picture.large}} style={styles.image}></Image>}
      </View> */}
      <View>
        <Button title="Fetch Data Through Toolkit" onPress={fetchDataAndDispatch} />
        <Text>{JSON.stringify(selector.pokemonApi)}</Text>
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
