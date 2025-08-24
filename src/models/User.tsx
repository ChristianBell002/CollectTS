export interface User {
    id: number;
    username: string;
    email: string;
    password: string; // Note: In a real application, passwords should be hashed and not stored in plain text
    createdAt: string; // ISO date string
    imageUrl?: string; // URL to the user's profile image
}
