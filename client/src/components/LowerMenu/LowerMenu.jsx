import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { changeStatusAddButton } from "../../redux/actions/addButton";
import AddPostList from "../addPostList/AddPostList";
export default function LowerMenu() {
  const dispatch = useDispatch();
  const addButtonStatus = useSelector(state => state.addButton);

  const goToAddingPost = () => {
    dispatch(changeStatusAddButton());
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => goToAddingPost()} style={styles.button}>
        {!addButtonStatus ? (
          <Text style={{ fontSize: 40, color: "#fff" }}>+</Text>
        ) : (
          <Text style={{ fontSize: 40, color: "#fff" }}>-</Text>
        )}
      </TouchableOpacity>
      {addButtonStatus && <AddPostList />}
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
