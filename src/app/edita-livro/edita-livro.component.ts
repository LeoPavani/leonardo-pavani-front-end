import { AutorOutput } from './../models/autor-output';
import { LivroOutput } from './../models/livro-output';
import { ActivatedRoute, Router } from '@angular/router';
import { LivrosService } from './../services/livros.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivroInput } from '../models/livro-input';

@Component({
  selector: 'app-edita-livro',
  templateUrl: './edita-livro.component.html',
  styleUrls: ['./edita-livro.component.scss']
})
export class EditaLivroComponent implements OnInit {
  livroId!: number;
  edicaoForm!: FormGroup;
  livro!: LivroOutput;
  listaDeAutoresIds: number[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private livrosService: LivrosService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.livroId = this.activatedRoute.snapshot.params['livroId'];
    this.edicaoForm = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      anoLancamento: ['', [Validators.required]],
      autoresIds: ['', [Validators.required]],
    });
    this.livrosService.buscaLivroPorId(this.livroId).subscribe({
      next: livroOutput => {
        this.livro = livroOutput;
        this.edicaoForm.get('titulo')?.setValue(this.livro.titulo);
        this.edicaoForm.get('anoLancamento')?.setValue(this.livro.anoLancamento);
        for(var autor of this.livro.autores){
          this.listaDeAutoresIds.push(autor.id);
        }
        this.edicaoForm.get('autoresIds')?.setValue(this.listaDeAutoresIds.toString());
      },
      error: erro => {
        alert('Houve um erro ao tentar buscar o livro escolhido, tente novamente mais tarde.');
      }
    });
  }

  salvarLivro(){
    if(this.edicaoForm.valid){
      var livro = this.edicaoForm.getRawValue() as LivroInput;
      var listaAutoresTexto = this.edicaoForm.get('autoresIds')?.value;
      var listaDeAutores = listaAutoresTexto.split(',');
      livro.autoresIds = listaDeAutores;


      this.livrosService.alteraLivro(this.livroId, livro).subscribe({
        next: livroOutput => {
          alert(`O livro ${livroOutput.titulo}  foi alterado com sucesso!`);
          this.router.navigate(['/lista-livros']);
        },
        error: erro => {
          alert('Houve um erro ao alterar o livro, tente novamente mais tarde.');
        }
      });
    }else{
      alert('Por favor, insira os dados corretamente!')
    }
  }
}
