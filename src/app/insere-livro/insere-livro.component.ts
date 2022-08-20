import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LivrosService } from './../services/livros.service';
import { Component, OnInit } from '@angular/core';
import { LivroInput } from '../models/livro-input';

@Component({
  selector: 'app-insere-livro',
  templateUrl: './insere-livro.component.html',
  styleUrls: ['./insere-livro.component.scss']
})
export class InsereLivroComponent implements OnInit {

  cadastroForm!: FormGroup;

  constructor(private livrosService: LivrosService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      anoLancamento: ['', [Validators.required]],
      autoresIds: ['', [Validators.required]],
    });
  }

  salvarLivro(){
    if(this.cadastroForm.valid){
      var livro = this.cadastroForm.getRawValue() as LivroInput;
      var listaAutoresTexto = this.cadastroForm.get('autoresIds')?.value;
      var listaDeAutores = listaAutoresTexto.split(',');
      livro.autoresIds = listaDeAutores;


      this.livrosService.insereLivro(livro).subscribe({
        next: livroOutput => {
          alert(`O livro ${livroOutput.titulo}  foi cadastrado com sucesso!`);
          this.router.navigate(['/lista-livros']);
        },
        error: erro => {
          alert('Houve um erro ao cadastrar o livro, tente novamente mais tarde.');
        }
      });
    }else{
      alert('Por favor, insira os dados corretamente!')
    }
  }
}
