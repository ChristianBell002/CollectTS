export interface Collection {
    id: number;
    name: string;
    description: string;
    userId: number;
    imageUrl: string;
    isFavorite?: boolean; // Optional property to indicate if the collection is a favorite
}