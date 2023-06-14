import { Book } from "./book";

export interface Author {
    id: number;
    name: string | null;
    image: string | null;
    books: Book[];
}