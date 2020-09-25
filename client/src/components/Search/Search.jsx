import React, { useState } from 'react';
import { getItems } from '../../actions';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    function submitSearch(e, data) {
        e.preventDefault();
        dispatch(getItems(data))
    }

    return (

        <form onSubmit={(e) => submitSearch(e, input)}>
            <input className="form-control mr-sm-2" type="search" aria-label="Search" onChange={(e) => setInput(e.target.value)} placeholder="Producto..." />
            <button type="submit" class="btn btn-outline-warning">BUSCAR</button>
        </form>
    )

}
export default SearchBar;