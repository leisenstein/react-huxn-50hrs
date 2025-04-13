import React from 'react';

const ProductList = () => {
    const products = [
        {id: 1, name: "Phone", price: "$699"},
        {id: 2, name: "Laptop", price: "$1200"},
        {id: 3, name: "Headphones", price: "$199"}
    ];
    return (
        <div>
            <h2>Products</h2>
            {products.map(({ id, name, price }) => (
                <li key={id}>{name } - {price }</li>
            ))};
        </div>
    );
};

export default ProductList;