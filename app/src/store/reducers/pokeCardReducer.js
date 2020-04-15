const initialState = {
    pokeImg: '',
    isFetching: false,
    error: '',
};

export const pokeCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_IMG_START':
            return {
                ...state,
                isFetching: true
            };
        case 'FETCH_IMG_SUCCESS':
            return {
                ...state,
                isFetching: false,
                pokemon: action.payload,
                error: ''
            };
        case 'FETCH_IMG_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};
