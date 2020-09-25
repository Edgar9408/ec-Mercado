import React from 'react';
import { useSelector, useDispatch, } from "react-redux";
import { getItems } from '../../actions/index.jsx';
import '../Styles.css'


const ChangePag = () => {
    const dispatch = useDispatch();
    var Pag = useSelector(state => state.currentPag);
    var Sort = useSelector(state => state.sort);
    const ItemSearch = useSelector(state => state.ItemSearch);


    function changePag(ItemSearch, Pag, Sort) {
        dispatch(getItems(ItemSearch, Pag, Sort))
    }


    return (
        <div>
            <div class="paginas">
                <button class="btn btn-secondary btn-lg" onClick={() => { changePag(ItemSearch, Pag = 0, Sort) }}>1</button>
                <button class="btn btn-secondary btn-lg" onClick={() => { changePag(ItemSearch, Pag = 10, Sort) }}>2</button>
            </div>
        </div>
    )
}

export default ChangePag;