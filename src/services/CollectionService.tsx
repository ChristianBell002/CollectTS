const API_URL = import.meta.env.VITE_API_URL;
//---------------------------------CollectionServices--------------------------------
export const fetchCollections = async () => { // 
    try {
        // const response = await fetch(`${API_URL}/api/collections`);
        const response = await fetch(`${API_URL}/collections`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return null;
    }
 }; 


//---------------------------------CollectionTypeServices----------------------------
export const fetchCollectionTypes = async () => {
    try {
        const response = await fetch(`${API_URL}/api/collectiontypes`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
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
        const response = await fetch(`${API_URL}/items`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return null;
    }
};

export const fetchItemsByCollectionId = async (collectionId: number) => {
    try {
        //const response = await fetch(`${API_URL}/collection/${collectionId}`);
        const response = await fetch(`${API_URL}/collections/${collectionId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.items;
    }
    catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return null;
    }
};