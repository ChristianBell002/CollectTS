import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Collection } from '../models/Collection';
import { ItemListIndv } from './ItemListIndv';
import { FavoriteButton } from './FavoriteButton';


interface CollectionCardProps {
    collection: Collection; // defining the interface of collection prop
    onClick?: () => void; // optional onClick prop
}

export const CollectionCard: React.FC<CollectionCardProps> = ({collection}) => { // might add a collection prop to pass each collection object to an individual instance of the collection card.

    const navigate = useNavigate();

    const handleViewCollection = () => {
        console.log("Navigating to collection ID:", collection.id);
        navigate(`/ItemList/${collection.id}`); // Navigate to the ItemList page with the collection ID
    };
    
    return (
        <>
            <div className = "card-wrap">
                <div className = "collection-card" onClick = {handleViewCollection}>
                    <div className='collection-card-header-div'>
                        {/* <ItemListIndv collectionId={collection.id} /> */}
                        <h2 className = "collection-card-header">{collection.name} </h2>
                        <FavoriteButton isFavorite={collection.isFavorite} />
                    </div>
                    <img src={collection.imageUrl} alt={collection.name} className="collection-card-image" />
                    <p>{collection.description}</p>
                    <p>Created by: {collection.userId}</p>
                    <p>Collection ID: {collection.id}</p>
                    {/* <button className="view-button" onClick={handleViewCollection}>View Items</button> */}
                </div>
            </div>
        </>
    );
}

export default CollectionCard;