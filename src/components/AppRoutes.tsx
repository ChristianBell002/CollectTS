import { Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Body } from './Body';
import { ErrorPage } from './ErrorPage';
import { ItemList } from './ItemList';

export const AppRoutes = () => {
    const { collectionId } = useParams<{ collectionId: string }>();
    console.log("Collection ID from params:", collectionId);
    return (
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/ItemList/:collectionId/" element={<ItemList collectionId={1} />} />
                {/* <Route path="/collection/:id" element={<CollectionPage />} /> */}
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        
    );
}