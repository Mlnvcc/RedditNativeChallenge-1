import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonSort: {
    marginHorizontal: 4,
    backgroundColor: "#61dafb",
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#374151",
    alignItems: "center",
    justifyContent: "center",
  },

  textSort: {
    color: "#374151",
    margin: 3,
    fontSize: 20,
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
    margin: 3,
    fontSize: 15,
  },

  container: {
    height: "10ex",
    padding: 5,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#f9fafb",
  },

  form: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  input: {
    padding: 7,
    width: 200,
    height: 40,
    borderStyle: "solid",
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "#f9fafb",
    color: "#f9fafb",
    backgroundColor: "#111827",
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 45,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#f9fafb",
  },
  hr: {
    backgroundColor: "#f9fafb",
    height: 1.3,
  },
  modal: {
    borderWidth: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#f9fafb",
    height: 180,
  },
  oneType: {
    height: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
    paddingTop: 5,
  },
});

export default styles;
