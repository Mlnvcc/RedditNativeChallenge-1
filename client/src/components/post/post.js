import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Card, ListItem, Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  StyleSheet,
  View,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { createPost } from "../../redux/actions/content";
import { useDispatch } from "react-redux";
export default function Post({ route }) {
  const dispatch = useDispatch();
  const el = route.params.el;
  console.log(el.comments.length);
  const [comment, setComment] = useState();
  const createPost = () => {
    const post = { text: comment };
    dispatch();
  };

  return (
    <>
      <View>
        <Card>
          <Card.Title>{el.title}</Card.Title>
          <Card.Divider />
          <Card.Image>
            <Text style={{ marginBottom: 10 }}>{el.description}</Text>
          </Card.Image>
          <View style={styles.icons}>
            <Icon.Button
              name="thumbs-up"
              backgroundColor="gray"
              onPress={() => console.log("like")}
            >
              {el.likes.length}
            </Icon.Button>
            <Icon.Button
              name="comments"
              backgroundColor="gray"
              onPress={() => console.log("comment")}
            >
              {el.comments.length}
            </Icon.Button>
          </View>
        </Card>
      </View>

      {el.comments.length === 0 ? (
        <Text style={{ alignItems: "center", justifyContent: "center" }}>
          Ваш комментарий будет первым
        </Text>
      ) : (
        <FlatList
          data={el.comments}
          renderItem={({ item }) => (
            <Card>
              <Card.Image /*source={"ASd"}*/>
                <Text style={{ marginBottom: 10 }}></Text>
                <Button
                  icon={<Icon name="code" color="#ffffff" />}
                  buttonStyle={{
                    borderRadius: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                  }}
                  title="VIEW NOW"
                />
              </Card.Image>
            </Card>
          )}
          keyExtractor={item => item.id}
        />
      )}
      <Input
        value={comment}
        onChangeText={text => setComment(text)}
        placeholder="Текст комментария"
      />
      <Button
        onPress={() => {
          createPost();
        }}
        title="Отправить комментарий"
      />
    </>
  );
}

const styles = StyleSheet.create({
  icons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});
