import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Switch } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import {
  chageStatusLike,
  chageStatusComment,
  chageStatusOld,
} from "../../redux/actions/user.ac";

export default function Header() {
  const dispath = useDispatch();
  const posts = useSelector(state => state.content);
  const status = useSelector(state => state.user.statusSearch);
  const [formValue, setFormValue] = useState("");

  const [sort, setSort] = useState(false);

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
              uri: "https://cdn.frankerfacez.com/avatar/twitch/80339713",
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
      <Button
        title="Сортировать поиск"
        onPress={() => changeSorStatus()}
      ></Button>
      {sort && (
        <View style={styles.modal}>
          <View style={styles.oneType}>
            <Text>Самые популярные</Text>
            <Switch
              value={status.likes}
              color="blue"
              onValueChange={() => changeSwitchSorStatusLikesUp()}
            />
          </View>
          <View style={styles.oneType}>
            <Text>Самые обсуждаемые</Text>
            <Switch
              value={status.comments}
              color="blue"
              onValueChange={() => changeCommentSetSortSwitch()}
            />
          </View>

          <View style={styles.oneType}>
            <Text>Самые старые</Text>
            <Switch
              value={status.old}
              color="blue"
              onValueChange={() => changeoldStatus()}
            />
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 4,
    backgroundColor: "#1e293b",
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#e2e8f0",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#e2e8f0",
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
    borderColor: "#e2e8f0",
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
    borderColor: "#e2e8f0",
    color: "#e2e8f0",
    backgroundColor: "#1e293b",
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 45,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#e2e8f0",
  },
  hr: {
    backgroundColor: "#e2e8f0",
    height: 1.3,
  },
  modal: {
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "#3949ab",
    height: 300,
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
