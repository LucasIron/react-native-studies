import axios from 'axios';
import {Component} from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type PokemonDetailProps = {
  name: string;
};

type PokemonResponse = {
  types: {
    type: {name: string};
  }[];

  sprites: {
    front_default: string;
  };
};

class PokemonDetail extends Component<PokemonDetailProps> {
  state = {
    pokemon: null as null | PokemonResponse,
  };

  handleButtonPress = () => {
    Linking.openURL(
      `https://bulbapedia.bulbagarden.net/wiki/${this.props.name}_(Pok%C3%A9mon)`,
    );
  };

  componentDidMount() {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/' + this.props.name)
      .then(response => {
        this.setState({pokemon: response.data as PokemonResponse});
      });
  }

  render() {
    const {name} = this.props;
    const {pokemon} = this.state;

    return (
      <View style={styles.view}>
        <View style={styles.section}>
          <View style={styles.header}>
            <Text style={styles.heading}>
              {pokemon && pokemon.types.map(type => type.type.name).join(' | ')}
            </Text>
            <Text style={styles.heading}>{name}</Text>
          </View>
        </View>
        <View style={styles.section}>
          {pokemon && (
            <Image
              style={styles.img}
              source={{uri: pokemon.sprites.front_default}}
              resizeMode="contain"
            />
          )}
        </View>
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleButtonPress}>
            <Text style={styles.buttonText}>Click Me!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'gainsboro',
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
  },

  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    borderBottomWidth: 1,
    borderColor: 'gainsboro',
  },

  header: {
    alignItems: 'center',
  },

  heading: {
    fontSize: 18,
    fontWeight: '500',
    textTransform: 'uppercase',
  },

  img: {
    flex: 1,
    height: 96,
  },

  button: {
    alignItems: 'center',
    backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: 'gainsboro',
    marginHorizontal: 7,
    paddingVertical: 6,
    paddingHorizontal: 24,
  },

  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
  },
});

export default PokemonDetail;
