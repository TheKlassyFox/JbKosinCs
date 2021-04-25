import '../App.css';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function Shop()
{

    useEffect(() => { fetchItems(); }, []);

    const [items, setItems] = useState()

    const fetchItems = async () =>
    {
        const data = await fetch("/get/events");
        const items = await data.json();
        console.log(items);
        setItems(items);
    }

    return (

        <div>
            <ol>
                {items ? items.map((i, r) => <li key={r}><Link to={`/shop/${i.eventId}`}>{i.name}</Link></li>) : "loading"}
            </ol>
        </div>
    );
}

export default Shop;