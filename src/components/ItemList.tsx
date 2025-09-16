//import React from 'react';
import { useEffect, useState } from 'react';
import { fetchItems, fetchItemsByCollectionId } from '../services/CollectionService'; 
//import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'; 
import  ItemCard  from './ItemCard'; // Assuming you have an ItemCard component to display each item

interface ItemListProps {
    itemId: number;
    collectionId: number; // The ID of the collection to fetch items for
}

export function ItemList ()  {
    const {collectionId} = useParams(); // Get the collection ID from the URL parameters
    const [items, setItems] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getItems = async () => {
            const data = await fetchItemsByCollectionId(collectionId ? parseInt(collectionId) : 1); // Fetch items for the specified collection ID
            console.log("Fetched items:", data);
            if (data) {
                setItems(data);
            } else {
                setError('Failed to fetch items');
            }
        };
        
        getItems();
    }, [collectionId]);

    return (
        <>
            <div>
                <button className = "back-button-div" onClick={() => window.history.back()}>Back</button>
            </div>
            
            <h1 className = "item-header">Item List
                <button className = "add-button">Add</button>
            </h1>
            
                <div className="item-list-container">
                    <div className = "item-list">
                        {items.length > 0 ? (
                            items.map((item) => (
                            <ItemCard key = {item.id} item={item} />  
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