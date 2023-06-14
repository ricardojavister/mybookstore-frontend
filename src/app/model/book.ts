import { Author } from "./author";

export interface Book {
    id: number;
    title: string | null;
    image: string | null;
    author: Author;
}