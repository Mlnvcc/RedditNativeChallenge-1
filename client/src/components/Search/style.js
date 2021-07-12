import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    padding: 5,
  },

  button: {
    marginHorizontal: 4,
    backgroundColor: "#111827",
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#61dafb",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#f9fafb",
    margin: 8,
    fontSize: 15,
  },

  myContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },

  input: {
    margin: 5,
    width: 200,
    height: 40,
    borderStyle: "solid",
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "#f9fafb",
    color: "#f9fafb",
    backgroundColor: "#111827",
  },
  container: {
    padding: 8,
    backgroundColor: "#1f2937",
    alignItems: "center",
    flex: 1,
    fontSize: 13,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor: "#E6E6E6",
  },
  separator: {
    marginTop: 1,
  },
});

export default styles;
