import React from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductsTable = ({ products, filterText, inStockOnly }) => {

    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {

        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        }

        if (inStockOnly && !product.stocked) {
            return;
        }


        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow category={product.category} key={product.category} />
            )
        }

        rows.push(
            <ProductRow product={product} key={product.name} />
        )

        //returns categories without repetition
        lastCategory = product.category;
    })

    return (
        <table>
            <thead>
                <tr style={{ display: "flex", gap: "2rem", marginLeft: "2rem" }}>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

export default ProductsTable