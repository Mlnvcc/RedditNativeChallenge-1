import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
  },
  modalButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  // footer: {
  //   height: 40,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: "#456ba0",
  // },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1f2937",
    borderTopWidth: 0.1,
    borderStyle: "solid",
    borderColor: "#f9fafb",
  },

  // button: {
  //   alignItems: "center",
  //   width: 50,
  //   backgroundColor: "#61dafb",
  //   borderRadius: 7,
  // },
});

export default styles;
