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
        <Text style={{ fontSize: 40, color: "#e2e8f0" }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#334155",
    borderTopWidth: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#e2e8f0",
  },

  button: {
    alignItems: "center",
    width: 50,
    backgroundColor: "#507cba",
    borderRadius: 7,
  },
});
