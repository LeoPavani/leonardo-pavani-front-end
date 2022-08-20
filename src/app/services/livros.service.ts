import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LivroOutput } from '../models/livro-output';

const APIURL = environment.api_url;
@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  constructor(private http: HttpClient) { }

  listaTodosOsLivros(): Observable<LivroOutput[]>{
    return this.http.get(`${APIURL}/livros`).pipe(map((resultado) => {
      return resultado as LivroOutput[];
    }));
  }

  insereLivro(body: object): Observable<LivroOutput>{
    return this.http.post(`${APIURL}/livros`, body).pipe(map((resultado) => {
      return resultado as LivroOutput;
    }));
  }

  buscaLivroPorId(id: number): Observable<LivroOutput>{
    return this.http.get(`${APIURL}/livros/${id}`).pipe(map((resultado) => {
      return resultado as LivroOutput;
    }));
  }

  alteraLivro(id: number, body: object){
    return this.http.put(`${APIURL}/livros/${id}`, body).pipe(map((resultado) => {
      return resultado as LivroOutput;
    }));
  }

  deletaLivro(id: number){
    return this.http.delete(`${APIURL}/livros/${id}`);
  }
}
