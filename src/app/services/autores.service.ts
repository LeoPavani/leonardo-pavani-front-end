import { AutorInput } from './../models/autor-input';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AutorOutput } from '../models/autor-output';

const APIURL = environment.api_url;
@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  constructor(private http: HttpClient) { }

  listaTodosOsAutores(): Observable<AutorOutput[]>{
    return this.http.get(`${APIURL}/autores`).pipe(map((resultado) => {
      return resultado as AutorOutput[];
    }));
  }

  insereAutor(body: object): Observable<AutorOutput>{
    return this.http.post(`${APIURL}/autores`, body).pipe(map((resultado) => {
      return resultado as AutorOutput;
    }));
  }

  buscaAutorPorId(id: number){
    return this.http.get(`${APIURL}/autores/${id}`).pipe(map((resultado) => {
      return resultado as AutorOutput;
    }));
  }

  alteraAutor(id: number, body: object){
    return this.http.put(`${APIURL}/autores/${id}`, body).pipe(map((resultado) => {
      return resultado as AutorOutput;
    }));
  }
}
