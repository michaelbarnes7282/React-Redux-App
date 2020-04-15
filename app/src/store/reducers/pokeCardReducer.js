const initialState = {
    poke: '',
    isFetching: false,
    error: '',
};

export const pokeCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CARD_START':
            return {
                ...state,
                isFetching: true
            };
        case 'FETCH_CARD_SUCCESS':
            return {
                ...state,
                isFetching: false,
                pokemon: action.payload,
                error: ''
            };
        case 'FETCH_CARD_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};
