import { Component, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { LivroOutput } from '../models/livro-output';
import { LivrosService } from '../services/livros.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.scss']
})
export class ListaLivrosComponent implements OnInit {
  penIcon = faPen;
  trashIcon = faTrash;
  listaDeLivros: LivroOutput[] = [];

  tituloASerExcluido = '';
  idASerExcluido = 0;

  constructor(private livrosServices: LivrosService) { }

  ngOnInit(): void {
    this.buscaLivros();
  }

  buscaLivros(){
    this.livrosServices.listaTodosOsLivros().subscribe({
      next: lista => {
        this.listaDeLivros = lista;
      },
      error: erro => {
        alert('Houve um erro ao tentar buscar os autores, tente novamente mais tarde.');
      }
    });
  }

  selecionaLivro(id: number, titulo: string){
    this.tituloASerExcluido = titulo;
    this.idASerExcluido = id;
  }

  excluir(id: number){
    this.livrosServices.deletaLivro(id).subscribe({
      next: resultado => {
        this.buscaLivros();
        alert('Livro excluído!');
      },
      error: erro => {
        alert('Erro ao excluir o livro, tente novamente mais tarde.')
      }
    });
  }

}
