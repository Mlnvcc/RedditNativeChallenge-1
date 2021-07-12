import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainComment: {
    width: 300,
    flexDirection: "column",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#f9fafb",
    backgroundColor: "#1f2937",
  },

  comOnComContainer: {
    width: 250,
    flexDirection: "column",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#f9fafb",
    backgroundColor: "#1f2937",
  },

  mainDiv: {
    margin: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  div: {
    width: 400,
    flexDirection: "column",
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#f9fafb",
    backgroundColor: "#1f2937",
    justifyContent: "center",
    alignContent: "center",
  },

  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    fontSize: 13,
    backgroundColor: "#111827",
    height: 200,
  },

  hr: {
    backgroundColor: "#61dafb",
    height: 1.3,
  },

  hrCom: {
    backgroundColor: "#61dafb",
    height: 0.5,
  },

  title: {
    fontSize: 25,
    color: "#f9fafb",
  },

  description: {
    color: "#f9fafb",
    fontSize: 20,
  },

  text: {
    color: "#f9fafb",
  },

  textAnswer: {
    marginTop: 8,
    color: "#f9fafb",
  },

  titleComm: {
    marginBottom: 5,
    fontSize: 20,
    color: "#f9fafb",
  },

  icons: {
    marginBottom: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "f9fafb",
  },
  content: {
    height: 200,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
});

export default styles;
