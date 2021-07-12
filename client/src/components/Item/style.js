import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    height: 200,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  overlayContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111827",
    width: 270,
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#61dafb",
  },

  overlayText: {
    margin: 3,
    fontSize: 25,
    color: "#f9fafb",
  },

  cancleOpacity: {
    backgroundColor: "#543333",
    margin: 1,
    width: 180,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#f9fafb",
  },

  overlayOpacity: {
    backgroundColor: "#1f2937",
    margin: 1,
    width: 180,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#f9fafb",
  },

  edit_button: {
    width: 30,
    height: 40,
    backgroundColor: "gray",
  },

  hr: {
    backgroundColor: "#61dafb",
    height: 1.3,
  },

  div: {
    width: 300,
    flexDirection: "column",
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#f9fafb",
    backgroundColor: "#1f2937",
  },

  header_post: {
    flexDirection: "column",
    alignSelf: "flex-end",
    height: 20,
    width: 17,
  },

  header_title: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },

  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 25,
    marginBottom: 8,
  },

  title1: {
    fontSize: 20,
    color: "#f9fafb",
  },

  text: {
    color: "#f9fafb",
  },

  imageTitle: {
    flexDirection: "column",
    alignItems: "center",
  },
});

export default styles;
