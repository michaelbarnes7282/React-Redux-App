const initialState = {
    pokemon: [],
    isFetching: false,
    error: '',
};

export const pokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POKE_START':
            return {
                ...state,
                isFetching: true
            };
        case 'FETCH_POKE_SUCCESS':
            return {
                ...state,
                isFetching: false,
                pokemon: action.payload,
                error: ''
            };
        case 'FETCH_POKE_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};