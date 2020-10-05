import React from 'react'

function Product(props) {
    const { item: { id, name, price, imgurl }, deleteProduct, updateProduct } = props
    return (
        <div className="inventory-container">
            <p className="inventory-text">{name}</p>
            <p className="inventory-price">{`$${price}`}</p>
            <img className="inventory-img" src={imgurl} alt={`This is a ${name}`} />
            <div className="buttons">
            <button onClick={() => deleteProduct(id)}>Delete</button>
            <button onClick={() => updateProduct(props.item)}>Update</button>
            </div>
        </div>
    )
}


export default Product