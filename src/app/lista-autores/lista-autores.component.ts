import { AutorOutput } from './../models/autor-output';
import { map } from 'rxjs';
import { AutoresService } from './../services/autores.service';
import { Component, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lista-autores',
  templateUrl: './lista-autores.component.html',
  styleUrls: ['./lista-autores.component.scss']
})
export class ListaAutoresComponent implements OnInit {
  penIcon = faPen;
  listaDeAutores: AutorOutput[] = [];

  constructor(private autoresService: AutoresService) { }

  ngOnInit(): void {
    this.autoresService.listaTodosOsAutores().subscribe({
      next: lista => {
        this.listaDeAutores = lista;
      },
      error: erro => {
        alert('Houve um erro ao tentar buscar os autores, tente novamente mais tarde.');
      }
    });
  }



}
