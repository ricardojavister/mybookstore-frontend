import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  public books!: Book[];
  public constructor(
    private bookService: BookService
  ) {}
  ngOnInit(): void {
    this.getBooks()
  }

  public getBooks() {
    this.bookService.getAll().subscribe(books => {
      this.books = books;
    });
  }

}
