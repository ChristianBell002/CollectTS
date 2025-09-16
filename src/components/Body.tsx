import { CollectionCard } from "./CollectionCard.tsx";
import {Card} from "./shared/Card.tsx";
import {fetchCollections}  from '../services/CollectionService.tsx';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Collection } from "../models/Collection.tsx";

export const Body = () => {

    const [collections, setCollections] = useState<any[]>([]); // had to change to any[] to avoid type 'never' error https://stackoverflow.com/questions/44147937/property-does-not-exist-on-type-never 
    const [error, setError] = useState<string | null>(null); 

    const navigate = useNavigate();

    const ItemListHandler = (collectionID: number) => {
        navigate(`/ItemList/${collectionID}`);    
    }


    useEffect(() => {
            const getCollections = async () => {
                const data = await fetchCollections();
                if (data) {
                    setCollections(data);
                } else {
                    setError('Failed to fetch collections');
                }
        };

        getCollections();
    }, []);


    return (
        <>
            <div className="welcome-message">
                <h1>Welcome to ViewCollect</h1>
                <p>ViewCollect is a platform for sharing your collections with the world. Join us today!</p>
            </div>

            <div className = "default-collection">
                <p>Here is how a collection will be displayed for you to click on: </p>
                <div className = "collection-card-container">
                    {collections.length > 0 ? (
                        collections.map((collection) => (
                            <Card key={collection.id} title={collection.name} id = {collection.id} buttonVisible={collection.isFavorite} text1={collection.description} imageUrl={collection.imageUrl} onClick={() => ItemListHandler(collection.id)}/>
                        ))
                    ) : (
                        <p>No collections available.</p>
                    )}  
                </div>
        </div>
        </>
    )
}

export default Body;