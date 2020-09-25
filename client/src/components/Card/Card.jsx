import React from "react"
import '../Styles.css'

const Encabezado = ({ title, thumbnail, price, condition, id }) => {

    function mostrar() {
        window.location.href = `http://localhost:3000/products/${id}`
    }
    return (

        <div class="card" style={{ width: '100%' }} onClick={() => mostrar()}>
            <div class="Card">
                <img
                    class="img"
                    alt=""
                    src={thumbnail}
                />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <h4 class="card-text">${price}</h4>
                    <h5 class="card-text">{condition}</h5>
                </div>
            </div>
        </div>

    )

}

export default Encabezado;
