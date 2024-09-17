import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

import books from "../../data/books.json";

const List = () => {
  return (
    <FlatList
      data={books}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.author + "-" + item.title}
    />
  );
};

export default List;

const Item = ({ item }) => {
  const navigation = useNavigation();

  const handlePress = useCallback(
    function () {
      navigation.navigate("Details", { book: item });
    },
    [navigation]
  );

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 50,
  },
});
