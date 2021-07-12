import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  div: {
    width: 800,
    height: 800,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#d7d1e8",
    borderRadius: 3,
  },
  h1: {
    fontSize: 35,
    color: "red",
    paddingTop: 10,
    paddingBottom: 5,
  },
  h2: {
    fontSize: 25,
    color: "blue",
    paddingTop: 10,
    paddingBottom: 5,
  },
  input: {
    height: 40,
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "black",
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "black",
  },
  button: {
    fontSize: 30,
    color: "red",
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "#877ba8",
    borderRadius: 10,
  },
});

export default styles;
