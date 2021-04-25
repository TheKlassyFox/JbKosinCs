import '../App.css';
import React, { useState, useEffect } from 'react';

function ItemDetail({match})
{

    useEffect(() => { fetchItems(); }, []);

    const [item, setItem] = useState()

    const fetchItems = async () =>
    {
        const data = await fetch(`/get/events/eventId/${match.params.id}`);
        const item = await data.json();
        setItem(item);
    }

    return (

        <div>
            {item ? <div><h1>{item.eventId}</h1><h2>{item.name}</h2><h3>{item.dateStart}</h3></div> : ""}
        </div>
    );
}

export default ItemDetail;