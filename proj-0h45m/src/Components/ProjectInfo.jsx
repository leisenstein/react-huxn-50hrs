import React from 'react';

function ProductInfo() {
    let product = {
        name: "Acer GX540",
        price: 1299.99,
        availability: "In Stock"
    }
    


    return (
        <div>
            <h1>Product</h1>
            <table>
                <th>Name</th>
                <th>Price</th>
                <th>Availability</th>
                <tr>
                    <td>{product.name}</td>
                    <td>${ product.price }</td>
                    <td>{ product.availability}</td>
                </tr>
            </table>
        </div>
    )
}

export default ProductInfo;