import { Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Body } from './Body';
import { ErrorPage } from './ErrorPage';
import { ItemList } from './ItemList';

export const AppRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/ItemList/:collectionId" element={<ItemList />} />
                {/* <Route path="/collection/:id" element={<CollectionPage />} /> */}
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        
    );
}