import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from "../Search/Search"
import { getProducts } from '../../actions';
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const dispatch = useDispatch();

    function submitSearch(e, data) {
        e.preventDefault();
        dispatch(getProducts(data))
    }
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav mx-auto">
                <Link to='/'>
                    <h2>Mercado</h2>
                </Link>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <SearchBar />
            </form>
        </nav>
    )
}


export default Navbar;