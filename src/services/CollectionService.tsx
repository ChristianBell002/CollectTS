import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;
//---------------------------------CollectionServices--------------------------------
export const fetchCollections = async () => { // 
    try {
        // const response = await fetch(`${API_URL}/api/collections`);
        const response = await axios.get(`${API_URL}/collections`);
        if (!response.status === true) {
            throw new Error('Network response was not ok');
        }
        return response.data;
    }
    catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return null;
    }
 }; 


//---------------------------------CollectionTypeServices----------------------------
export const fetchCollectionTypes = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/collectiontypes`);
        if (!response.status === true) {
            throw new Error('Network response was not ok');
        }
        return response.data;
    }
    catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return null;
    }
 };


//---------------------------------ItemServices--------------------------------------
export const fetchItems = async () => {
    try {
        //const response = await fetch(`${API_URL}/api/items`);
        const response = await axios.get(`${API_URL}/items`);
        if (!response.status === true) {
            throw new Error('Network response was not ok');
        }
        return response.data;
    }
    catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return null;
    }
};

export const fetchItemsByCollectionId = async (collectionId: number) => {
    try {
        //const response = await fetch(`${API_URL}/collection/${collectionId}`);
        const response = await axios.get(`${API_URL}/items?collectionId=${collectionId})`);
        if (!response.status === true) {
            throw new Error('Network response was not ok');
        }
        return response.data;
    }
    catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return null;
    }
};