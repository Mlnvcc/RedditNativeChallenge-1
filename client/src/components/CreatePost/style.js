import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    backgroundColor: "#111827",
  },

  input: {
    fontSize: 15,
    paddingBottom: 7,
    width: 240,
    height: 50,
    borderStyle: "solid",
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "#f9fafb",
    color: "#f9fafb",
    backgroundColor: "#1f2937",
  },

  multilineInput: {
    fontSize: 15,
    height: 100,
    width: 240,
    margin: 15,
    color: "#f9fafb",
    borderStyle: "solid",
    borderColor: "#f9fafb",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#1f2937",
  },

  button: {
    margin: 5,
    marginHorizontal: 4,
    backgroundColor: "#475569",
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#61dafb",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#f9fafb",
    margin: 3,
    fontSize: 20,
  },
});

export default styles;
