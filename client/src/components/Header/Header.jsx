import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Switch } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import {
  chageStatusLike,
  chageStatusComment,
  chageStatusOld,
} from "../../redux/actions/user.ac";

export default function Header() {
  const dispath = useDispatch();
  const status = useSelector(state => state.user.statusSearch);
  const [formValue, setFormValue] = useState("");

  const [sort, setSort] = useState(false);
  const uri = useSelector(state => state.user.userInfo.uri);
  const changeSorStatus = () => {
    setSort(prev => !prev);
  };
  const changeSwitchSorStatusLikesUp = () => {
    dispath(chageStatusLike());
  };
  const changeCommentSetSortSwitch = () => {
    dispath(chageStatusComment());
  };
  const changeoldStatus = () => {
    dispath(chageStatusOld());
  };

  const navigation = useNavigation();

  const loadScene = () => {
    navigation.navigate("Profile");
  };

  const loadSearcjScene = () => {
    navigation.navigate("Search", { data: formValue });
  };

  const submitForm = () => {
    if (formValue.trim()) {
      loadSearcjScene();
      setFormValue("");
    }
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={loadScene}>
          <Image
            style={styles.image}
            source={{
              uri: uri,
            }}
          />
        </TouchableOpacity>

        <View style={styles.form}>
          <TextInput
            onChangeText={text => setFormValue(text)}
            value={formValue}
            style={styles.input}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Write here..."
          ></TextInput>

          <TouchableOpacity onPress={submitForm} style={styles.button}>
            <Text style={styles.text}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.buttonSort}
        onPress={() => changeSorStatus()}
      >
        <Text style={styles.textSort}>Sort by:</Text>
      </TouchableOpacity>

      {sort && (
        <View style={styles.modal}>
          <View style={styles.oneType}>
            <Text style={styles.text}>Population: </Text>
            <Switch
              value={status.likes}
              color="#61dafb"
              onValueChange={() => changeSwitchSorStatusLikesUp()}
            />
          </View>
          <View style={styles.oneType}>
            <Text style={styles.text}>Comments: </Text>
            <Switch
              value={status.comments}
              color="#61dafb"
              onValueChange={() => changeCommentSetSortSwitch()}
            />
          </View>

          <View style={styles.oneType}>
            <Text style={styles.text}>Oldest :</Text>
            <Switch
              value={status.old}
              color="#61dafb"
              onValueChange={() => changeoldStatus()}
            />
          </View>
        </View>
      )}
    </>
  );
}

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
    placeholderTextColor: "#cff1f9",
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
