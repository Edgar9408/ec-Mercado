import React from 'react';
import { useSelector, useDispatch, } from "react-redux";
import { getItems } from '../../actions/index.jsx';
import '../Styles.css'


const FiltersBar = () => {
    const dispatch = useDispatch();
    var Pag = useSelector(state => state.currentPag);
    var Sort = useSelector(state => state.sort);
    var filterValue = useSelector(state => state.filterValue);
    const ItemSearch = useSelector(state => state.ItemSearch);

    function Orden(ItemSearch, Pag, Sort) {
        dispatch(getItems(ItemSearch, Pag, Sort))
    }
    function Filtrar(ItemSearch, Pag, Sort) {
        dispatch(getItems(ItemSearch, Pag, Sort, filterValue))
    }

    return (
        <div>

            <div class="btn-group-vertical">
                <div>
                    <h4 class="barTitle">Ordenar</h4>
                </div>
                <button class="btn btn-secondary btn-lg" onClick={() => { Orden(ItemSearch, Pag, Sort = 'price_asc') }}>Menor Precio</button>
                <button class="btn btn-secondary btn-lg" onClick={() => { Orden(ItemSearch, Pag, Sort = 'price_desc') }}>Mayor Precio</button>
                <div>
                    <h4 class="barTitle">Filtrar</h4>
                </div>
                <button class="btn btn-secondary btn-lg" onClick={() => { Filtrar(ItemSearch, Pag, Sort, filterValue = "2230284") }}>Nuevo</button>
                <button class="btn btn-secondary btn-lg" onClick={() => { Filtrar(ItemSearch, Pag, Sort, filterValue = "2230582") }}>Reacondicionado</button>
                <button class="btn btn-secondary btn-lg" onClick={() => { Filtrar(ItemSearch, Pag, Sort, filterValue = "2230581") }}>Usado</button>
            </div>
        </div>
    )
}

export default FiltersBar;