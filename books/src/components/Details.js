import { useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";

const Details = () => {
  const route = useRoute();
  const { book } = route.params;

  return (
    <View>
      <Text>{book.title}</Text>
      <Text>{book.author}</Text>
    </View>
  );
};

export default Details;
