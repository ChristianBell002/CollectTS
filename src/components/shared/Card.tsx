import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Collection } from '../../models/Collection';
import { FavoriteButton } from '.././FavoriteButton';
import './Card.css';


interface CardProps{
    // component model for a generalized card component.
    id: number;
    title: string;
    text1?: string; // desc is optional
    text2?: string; // desc is optional
    text3?: string; // desc is optional
    imageUrl?: string; // users can choose to not upload an image
    buttonVisible: boolean; // users can choose to not have a button
    onClick?: () => void; // optional onClick handler
}

export const Card = (CardProps: CardProps) => { // might add a collection prop to pass each collection object to an individual instance of the collection card.

    //const navigate = useNavigate();

    // const handleViewCollection = () => {onClick = {handleViewCollection}
        //console.log("Navigating to collection ID:", collection.id);
        //navigate(`/ItemList/${CardProps.id}`); // Navigate to the ItemList page with the collection ID
    //};
    
    return (
        <>
            <div className = "generic-card-wrap">
                <div className = "generic-card" onClick={CardProps.onClick}>
                    <div className='generic-card-header-div'>
                        <h2 className = "generic-card-header">{CardProps.title} </h2>
                        <FavoriteButton isFavorite={CardProps.buttonVisible} />
                    </div>
                    <img src={CardProps.imageUrl} alt={CardProps.title} className="generic-card-image" />
                    <p>{CardProps.text1}</p>
                    <p>Created by: {CardProps.id}</p>
                    <p>Collection ID: {CardProps.id}</p>
                </div>
            </div>
        </>
    );
}

export default Card;