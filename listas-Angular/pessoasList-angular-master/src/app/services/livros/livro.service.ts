import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Livros } from 'src/app/livros/livros';

@Injectable({
  providedIn: 'root'
})
export class LivroService {


  API: string = 'http://localhost:8080/api/livro';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Livros[]> {
    return this.http.get<Livros[]>(this.API);
  }

  save(livro: Livros): Observable<Livros> {
    return this.http.post<Livros>(this.API, livro);
  }

  update(livro: Livros): Observable<Livros> {
    return this.http.put<Livros>(this.API, livro);
  }

  delete(id: number): Observable<any> {

    let params = new HttpParams()
      .set('id', id.toString())
    return this.http.delete<any>(this.API, { params: params });
  }

  exemploErro(): Observable<Livros[]> {
    return this.http.get<Livros[]>(this.API + '/erro');
  }
}
