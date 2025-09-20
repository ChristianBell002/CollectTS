import { Routes, Route } from 'react-router-dom';
import { Body } from './Body';
import { ErrorPage } from './ErrorPage';
import { ItemList } from './ItemList';
import { Login } from './Login';
import { UserPage } from './UserPage/UserPage';

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/ItemList/:collectionId" element={<ItemList />} />
                {/* <Route path="/collection/:id" element={<CollectionPage />} /> */}
                <Route path="/profile" element={<UserPage/>}/>
                <Route path="*" element={<ErrorPage />} />
                <Route path = "/login" element = {<Login/>}></Route>
            </Routes>
        </>
        
    );
}