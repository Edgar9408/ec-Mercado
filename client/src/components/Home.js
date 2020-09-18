import React, { Component } from "react"
import Details from "./Card/Details.js"
import Navbar from "./Navbar/Navbar.js"
import Catalog from "./Catalogue/Catalogue.js"
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