import React from 'react';
import Encabezado from '../Card/Card.jsx';
import FiltersBar from '../Filters/Filters.jsx'
import ChangePag from '../Filters/ChangePag.jsx'
import { useSelector } from "react-redux";
import '../Styles.css'

const Catalog = () => {
    const Items = useSelector(state => state.Items)

    return (
        <div class="all">
            <div class="catalogue">
                <div>
                    <FiltersBar />
                </div>
                <div>
                    {Items && Items.map(b =>
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
            <div>
                <ChangePag />
            </div>
        </div>
    )
}

export default Catalog;




