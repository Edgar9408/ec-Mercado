import React from 'react';
import Encabezado from '../Card/Card.js';
import { useSelector, useDispatch, } from "react-redux";
import { getProducts } from '../../actions/index.js'
import '../Styles.css'

const Catalog = () => {
    const dispatch = useDispatch()
    const Product = useSelector(state => state.currentProduct)
    const Products = useSelector(state => state.Products)
    var Page = useSelector(state => state.currentOffset)
    var Sort = useSelector(state => state.sort)
    var filterValue = useSelector(state => state.filterValue)

    console.log(Page)
    console.log(Sort)
    console.log(filterValue)

    return (
        <div >
            <div class="catalogue">
                <div class="columna">

                    <div class="btn-group-vertical">
                        <button class="btn btn-secondary btn-lg" onClick={() => { dispatch(getProducts(Product, Page, Sort = 'price_asc')) }}>asc</button>
                        <button class="btn btn-secondary btn-lg" onClick={() => { dispatch(getProducts(Product, Page, Sort = 'price_desc')) }}>desc</button>
                        <button class="btn btn-secondary btn-lg" onClick={() => { dispatch(getProducts(Product, Page, Sort, filterValue = "2230284")) }}>Nuevo</button>
                        <button class="btn btn-secondary btn-lg" onClick={() => { dispatch(getProducts(Product, Page, Sort, filterValue = "2230582")) }}>Reacondicionado</button>
                        <button class="btn btn-secondary btn-lg" onClick={() => { dispatch(getProducts(Product, Page, Sort, filterValue = "2230581")) }}>Usado</button>
                    </div>

                </div>
                <div class='grid'>
                    {Products && Products.map(b =>
                        <Encabezado
                            id={b.id}
                            thumbnail={b.thumbnail}
                            title={b.title}
                            price={b.price}
                            condition={b.condition}
                            stock={b.available_quantity}
                        />)}
                </div>
            </div>
            <div class="paginas">
                <button class="btn btn-secondary btn-lg" onClick={() => { dispatch(getProducts(Product, Page = 0, Sort)) }}>1</button>
                <button class="btn btn-secondary btn-lg" onClick={() => { dispatch(getProducts(Product, Page = 10, Sort)) }}>2</button>
            </div>
        </div>
    )
}

export default Catalog;




