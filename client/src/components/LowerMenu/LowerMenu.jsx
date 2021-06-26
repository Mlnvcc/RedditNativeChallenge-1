import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function LowerMenu() {
  const navigation = useNavigation();

  const loadScene = () => {
    navigation.navigate("CreatePost");
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={loadScene} style={styles.button}>
        <Text style={{ fontSize: 40, color: "#fff" }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#456ba0",
  },

  button: {
    alignItems: "center",
    width: 50,
    backgroundColor: "#507cba",
    borderRadius: 7,
  },
});
