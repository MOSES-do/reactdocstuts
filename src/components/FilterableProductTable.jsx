import React, { useState } from 'react'
import ProductsTable from './ProductsTable'
import SearchBar from './SearchBar'


const FilterableProductTable = ({ products }) => {

    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);
    return (

        <>
            <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={setFilterText} onInStockOnlyChange={setInStockOnly} />

            <ProductsTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
        </>

    )
}

export default FilterableProductTable