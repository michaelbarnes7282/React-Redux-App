import { combineReducers } from 'redux';
import { pokeReducer as poke } from './pokeReducer'
import {pokeCardReducer as pokeCard} from './pokeCardReducer'

export default combineReducers({
    poke, pokeCard
});