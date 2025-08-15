import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface FavoriteButtonProps {
    isFavorite: boolean; // initial favorite status
}

export const FavoriteButton = (props: FavoriteButtonProps) => {
    const [isFavorite, setIsFavorite] = useState(props.isFavorite); // Set initial favorite status from props

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