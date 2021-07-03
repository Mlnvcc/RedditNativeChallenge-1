import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Item from "../Item/Item";
import { getContent } from "../../redux/actions/content";
import { useNavigation } from "@react-navigation/native";

export default function PostList() {
  const navigation = useNavigation();

  const posts = useSelector(state => state.content.content);
  const loader = useSelector(state => state.content.loader);
  const dispatch = useDispatch();

  const status = useSelector(state => state.user.statusSearch);

  const user = useSelector(state => state.user);

  if (status.likes) {
    posts.sort((a, b) => b.likes.length - a.likes.length);
  }
  if (status.comments) {
    posts.sort((a, b) => b.comments.length - a.comments.length);
  }
  if (status.old) {
    posts.sort((a, b) => a.dateNumber - b.dateNumber);
  }

  useEffect(() => {
    dispatch(getContent());
  }, []);

  return (
    <>
      {loader ? (
        <Text style={{ color: "#f9fafb", fontSize: 17 }}>LOADING ...</Text>
      ) : posts.length ? (
        <View style={styles.container}>
          <Text style={{ color: "#f9fafb", fontSize: 17 }}>Last posts:</Text>

          <FlatList
            style={{ height: "80ex" }}
            data={posts}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("OnePostPage", {
                    el: item,
                  });
                }}
              >
                <Item el={item} />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    fontSize: 13,
    backgroundColor: "#111827",
    height: 200,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor: "#E6E6E6",
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: "white",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor: "#EEEEEE",
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
  },
  description: {
    fontSize: 15,
    color: "#888",
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  time: {
    fontSize: 13,
    color: "#808080",
    marginTop: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconData: {
    width: 15,
    height: 15,
    marginTop: 5,
    marginRight: 5,
  },
  timeContainer: {
    flexDirection: "row",
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  socialBarSection: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: "flex-end",
    justifyContent: "center",
  },
  socialBarButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
