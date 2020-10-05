import React from "react";
import Product from "../Product/Product";
import axios from "axios";

function Dashboard(props) {
  const deleteProduct = id => {
    axios.delete(`/api/deleteProduct/${id}`)
      .then(() => {
            props.getInventoryFn();
      })
      .catch((error) => alert(error, 'No Product was found to remove'))
  }

    return (
      <div className="inventory_container">
        {props.inventory.map((item, index) => (
      <Product
            item={item}
            key={index}
            deleteProduct={deleteProduct}
            updateProduct={props.updateProduct}
      />
      ))}
      </div>
    )
  }

   export default Dashboard
