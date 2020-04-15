import axios from 'axios';


export const fetchPokemon = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_POKE_START' })
        axios
            .get('https://pokeapi.co/api/v2/pokedex/2')
            .then(res => {
                // console.log(res.data.pokemon_entries);
                dispatch({ type: 'FETCH_POKE_SUCCESS', payload: res.data.pokemon_entries})
            })
            .catch(err => {
                dispatch({
                    type: 'FETCH_POKE_FAILURE',
                    payload: `${err}`
                });
            });
    };
};
