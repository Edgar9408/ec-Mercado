import React, { useEffect } from 'react';
import { getItem } from '../../actions/index.js'
import { useSelector, useDispatch, } from "react-redux";
import '../Styles.css'

const Details = (itemId) => {
    const Item = useSelector(state => state.item)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getItem(itemId.id));
    }, [])
    console.log(itemId);

    return (
        <div class="catalogue">
            <img
                class="img-details"
                alt=""
                src={Item.thumbnail}
            />
            <div class="details">
                <h1>{Item.title}</h1>
                <h3>${Item.price}</h3>
                <h4>Condicion: {Item.condition}</h4>
                <h4>Cantidad Disponible: {Item.available_quantity}</h4>
            </div>
        </div>
    )

}

export default Details;