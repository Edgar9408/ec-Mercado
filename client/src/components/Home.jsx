import React, { Component } from "react"
import Details from "./Card/Details.jsx"
import Navbar from "./Navbar/Navbar.jsx"
import Catalog from "./Catalogue/Catalogue.jsx"
import { Route } from 'react-router-dom';


class Product extends Component {

    render() {
        return (
            <div>
                <Route
                    path='/'
                    render={() => <Navbar />}
                />
                <Route
                    exact
                    path='/products/:id'
                    render={({ match }) => <Details id={match.params.id} />}
                />
                <Route
                    exact
                    path='/'
                    render={() => <Catalog />}
                />
            </div>
        )
    }
}

export default Product;