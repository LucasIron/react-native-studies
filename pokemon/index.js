import {AppRegistry, StyleSheet, View} from 'react-native';

import {name as appName} from './app.json';

import Header from './src/components/Header';
import PokemonList from './src/components/PokemonList';

const App = () => (
  <View style={styles.view}>
    <Header text="Pokémon" />
    <PokemonList text="Pokémon List" />
  </View>
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

AppRegistry.registerComponent(appName, () => App);
