import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  api = 'api/Books/';
  constructor(private http: HttpClient) { }

  public getAll() : Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.apiEndpoint}${this.api}`);
  }

}
