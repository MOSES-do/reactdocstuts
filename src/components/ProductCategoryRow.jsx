import React from 'react'

const PoductCategoryRow = ({ category }) => {
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    )
}

export default PoductCategoryRow