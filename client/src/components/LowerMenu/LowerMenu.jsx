import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

// import styles from "./style";

export default function LowerMenu() {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const loadScene = () => {
    setModalVisible(!modalVisible);
    navigation.navigate("CreatePost");
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={loadScene} style={styles.button}>
        <Text style={{ fontSize: 40, color: "#f9fafb" }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1f2937",
    borderTopWidth: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#f9fafb",
  },

  button: {
    alignItems: "center",
    width: 50,
    backgroundColor: "#61dafb",
    borderRadius: 7,
  },
});
