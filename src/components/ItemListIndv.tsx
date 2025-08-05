//import React from 'react';
import { useEffect, useState } from 'react';
import { fetchItems, fetchItemsByCollectionId } from '../services/CollectionService'; 
//import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'; 
//  ItemCard  from './ItemCard'; // Assuming you have an ItemCard component to display each item
import type { Item } from '../models/Item'; // Assuming you have an Item model defined

interface ItemListProps { 
    collectionId: number; // The ID of the collection to fetch items for
}


export function ItemListIndv (props: ItemListProps)  {
    
    const [items, setItems] = useState<Item[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getItems = async () => {
            //console.log("Fetching items for collection ID:", props.collectionId);
            //const data = await fetchItemsByCollectionId(parseInt(id || '') || 1); // Fetch items for the specified collection ID
            const data = await fetchItemsByCollectionId(props.collectionId ?? 0); // Fetch items for the specified collection ID
            console.log("Fetched items:", data);
            if (data) {
                setItems(data);
            } else {
                setError('Failed to fetch items');
            }
        };
        
        getItems();
    }, []);

    return (
        <> 

        {items && (items.length > 0) && (
            <div>
            <p>Items List:</p>
            {items.map((item) => (
                <p key = {item.id}>{item.name}</p>  
            ))}
            </div>
        )}          
        </>           
    );
}