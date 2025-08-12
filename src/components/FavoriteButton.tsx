import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
//import { Collection } from "../models/Collection";

export const FavoriteButton = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    return (
        <button className='favorite-button' 
        onClick= {e => { 
            e.stopPropagation();
            setIsFavorite(!isFavorite);
        }}
        style={{background: 'none', border: 'none', cursor: 'pointer'}}
        aria-label={isFavorite ? "Unfavorite" : "Favorite"}     
        >
            {isFavorite ? <FaHeart color="red" size={25} /> : <FaRegHeart color="red" size={25}/>}
        </button>
    )
}