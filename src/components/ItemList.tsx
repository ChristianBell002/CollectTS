//import React from 'react';
import { useEffect, useState } from 'react';
import { fetchItemsByCollectionId } from '../services/CollectionService'; 
//import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'; 
import  ItemCard  from './ItemCard'; // Assuming you have an ItemCard component to display each item

interface ItemListProps {
    
    collectionId: number; // The ID of the collection to fetch items for
}

export const ItemList = (props: ItemListProps) => {
    const {id} = useParams(); // Get the collection ID from the URL parameters
    const [items, setItems] = useState([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getItems = async () => {
            //console.log("Fetching items for collection ID:", props.collectionId);
            const data = await fetchItemsByCollectionId(props.collectionId); // Fetch items for the specified collection ID
            if (data) {
                setItems(data);
            } else {
                setError('Failed to fetch items');
            }
        };
        
        getItems();
    }, [id]);

    return (
        <>
        
        <h1 className = "item-header">Item List
            <button className = "add-button">Add</button>
        </h1>
        
            <div className="item-list-container">
                <div className = "item-list">
                    {items.length > 0 ? (
                        items.map((item) => (
                        <ItemCard item={item} />  
                        ))
                    ) : (
                        <p>No items available</p>
                    )}
                    {error && <p className="error-message">{error}</p>}                    
                </div>
            </div>
        </>
    );
}