import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
export default function Post({ route }) {
  const id = route.params.id;

  

  return <Text>{id}</Text>;
}
