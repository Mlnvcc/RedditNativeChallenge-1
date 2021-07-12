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

  icons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: "transparent",
  },
  updateButton: {
    backgroundColor: "#00b5ec",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  updateText: {
    color: "white",
  },
});

export default styles;
