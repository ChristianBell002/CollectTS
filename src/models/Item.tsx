export interface Item {
    id: number;
    name: string;
    description: string;
    collectionId: number; // Assuming each item belongs to a collection
    imageUrl: string;
}