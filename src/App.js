import React from "react";
import NewsList from "./NewsList";
import { View, StyleSheet } from "react-native";



const NewsList = () => {
    return(
        <View style={styles.container}>
            <Calculadora/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
export default NewsList;



