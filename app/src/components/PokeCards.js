import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PokeCard from './PokeCard'

import { fetchPokemon } from '../store/actions/pokeActions'

const PokeCards = props => {

    useEffect(() => {
        props.fetchPokemon();
    }, []);

    console.log('props', props)
    return (
        <div>
            <div className='cards'>
                {props.pokemon.map(poke => (
                    <PokeCard key={poke.entry_number} props={poke} />
                ))}
            </div>
            {props.error && <p className='error'>{props.error}</p>}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        pokemon: state.poke.pokemon,
        isFetching: state.poke.pokemon,
        error: state.poke.error
    };
}

export default connect(
    mapStateToProps,
    { fetchPokemon }
)(PokeCards);