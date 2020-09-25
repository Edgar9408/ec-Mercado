import {
    GET_ITEMS,
    GET_ITEM
} from '../actions';

const initialState = {
    Items: [],
    ItemSearch: "",
    currentPag: "0",
    sort: "",
    filterValue: "",
    item: ""
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS: {
            return {
                ...state,
                Items: action.payload.results,
                ItemSearch: action.payload.query,
                currentPag: action.payload.paging.offset,
                sort: action.payload.sort.id,
                filterValue: action.payload.filters[0].values[0].id
            }
        }
        case GET_ITEM: {
            return {
                ...state,
                item: action.payload
            }
        }

        default:
            return state;
    }
}


export default rootReducer;