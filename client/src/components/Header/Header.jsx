import React, { useState } from "react";
import { View, TextInput, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Switch } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import {
  chageStatusLike,
  chageStatusComment,
  chageStatusOld,
} from "../../redux/actions/user.ac";
import styles from "./style";

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
          {uri ? (
            <Image
              style={styles.image}
              source={{
                uri: uri,
              }}
            />
          ) : (
            <Image
              style={styles.image}
              source={{
                uri: "https://memepedia.ru/wp-content/uploads/2020/10/big-floppa-1-360x270.jpg",
              }}
            />
          )}
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
