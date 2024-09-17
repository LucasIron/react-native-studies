import {View, Text, StyleSheet} from 'react-native';

type HeaderProps = {
  text: string;
};

const Header = ({text}: HeaderProps) => (
  <View style={styles.view}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gainsboro',
  },

  text: {
    fontSize: 22,
  },
});

export default Header;
