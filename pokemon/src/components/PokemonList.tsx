import axios from 'axios';
import {Component} from 'react';
import {ScrollView} from 'react-native';

import PokemonDetail from './PokemonDetail';

type PokemonListProps = {
  text: string;
};

class PokemonList extends Component<PokemonListProps> {
  state = {
    pokemonList: [],
  };

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon').then(response => {
      this.setState({pokemonList: response.data.results});
    });
  }

  render() {
    console.log(this.state.pokemonList);
    return (
      <ScrollView>
        {this.state.pokemonList.map(({name}) => (
          <PokemonDetail key={name} name={name} />
        ))}
      </ScrollView>
    );
  }
}

export default PokemonList;
