import {
    GET_PRODUCTS,
    GET_ITEM
} from '../actions';

const initialState = {
    Products: [],
    currentProduct: "",
    currentOffset: "0",
    sort: "",
    filterValue: "",
    item: ""
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS: {
            return {
                ...state,
                Products: action.payload.results,
                currentProduct: action.payload.query,
                currentOffset: action.payload.paging.offset,
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