import { useState, useEffect } from 'react'




const List = ({ getItems }) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(getItems())
        console.log('updating items');
    }, [getItems])

    return items.map(item => <div key={item}>{item}</div>)
}

export default List;
