import { CollectionCard } from "./CollectionCard.tsx";
import {Card} from "./shared/Card.tsx";
import {fetchCollections}  from '../services/CollectionService.tsx';
import { useEffect, useState } from "react";

export const Body = () => {

    const [collections, setCollections] = useState([]);
    const [error, setError] = useState<string | null>(null); 

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


    //console.log("Fetched collections data", collections);
   
    // might have to add a parameter to the collectionCard to receive the collection data.
    // it will return as a list of collection objects.
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
                            <CollectionCard collection = {collection}/>
                        ))
                    ) : (
                        <p>No collections available</p>
                    )}
                </div>
            </div>

            <div>
                <Card id={1} title={"Collection 1"} buttonVisible = {true}/>
            </div>
            
        </>
    )
}

export default Body;