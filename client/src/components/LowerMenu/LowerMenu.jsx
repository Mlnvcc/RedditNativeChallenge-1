import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";

export default function LowerMenu() {
  const goToAddingPost = () => {
    return console.log("here"); // функция для перехода на создание поста
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={goToAddingPost} style={styles.button}>
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
