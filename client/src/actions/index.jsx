import axios from 'axios';

export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEM = 'GET_ITEM';



export function getItems(payload, offset = 0, sort, filterValue = "2230284") {
    return function (dispatch) {
        axios.get(`http://localhost:3001/api/search?query=${payload}&offset=${offset}&sort=${sort}&ITEM_CONDITION=${filterValue}`)
            .then((res) => res.data)
            .then(data => {
                dispatch({ type: GET_ITEMS, payload: data });
                console.log(data);
            })
            .catch(error => alert(error, 'Algo esta saliendo pesimo'))
    }
}

export function getItem(id) {
    return function (dispatch) {
        axios.get(`http://localhost:3001/api/products/${id}`)
            .then((res) => res.data)
            .then(data => {
                dispatch({ type: GET_ITEM, payload: data });
                console.log(data);
            })
            .catch(error => alert(error, 'Algo esta saliendo pesimo'))
    }
}
