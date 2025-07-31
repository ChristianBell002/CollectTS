import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Item } from '../models/Item'; // Assuming you have an Item model defined

interface ItemCardProps {
    item: Item; // defining the interface of item prop
}
export default function ItemCard (props: ItemCardProps){ // might add a collection prop to pass each collection object to an individual instance of the collection card.

    const navigate = useNavigate();
    const [dataList, setDataList] = useState([]);

    return (
        <>
            <div className = "collection-card">
                <h2 className = "collection-card-header">{props.item.name}</h2>
                <p>{props.item.description}</p>
                {/* <p>Uploaded by: {props.item.collection.userId}</p> */}
            </div>
        </>
    );
}