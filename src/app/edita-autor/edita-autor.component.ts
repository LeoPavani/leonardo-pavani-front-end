import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutoresService } from './../services/autores.service';
import { AutorOutput } from './../models/autor-output';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutorInput } from '../models/autor-input';

@Component({
  selector: 'app-edita-autor',
  templateUrl: './edita-autor.component.html',
  styleUrls: ['./edita-autor.component.scss']
})
export class EditaAutorComponent implements OnInit {

  autorId!: number;
  autor!: AutorOutput;
  edicaoForm!: FormGroup;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private autoresService: AutoresService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.autorId = this.activatedRoute.snapshot.params['autorId'];
    this.edicaoForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      biografia: ['', [Validators.required]]
    });
    this.autoresService.buscaAutorPorId(this.autorId).subscribe({
      next: autorOutput => {
        this.autor = autorOutput;
        this.edicaoForm.get('nome')?.setValue(this.autor.nome);
        this.edicaoForm.get('biografia')?.setValue(this.autor.biografia);
      },
      error: erro => {
        alert('Houve um erro ao tentar buscar o autor escolhido, tente novamente mais tarde.');
      }
    });

  }

  salvarAutor(){
    if(this.edicaoForm.valid){
      var autor = this.edicaoForm.getRawValue() as AutorInput;

      this.autoresService.alteraAutor(this.autorId, autor).subscribe({
        next: autorOutput => {
          alert(`O usuário ${autorOutput.nome}  foi alterado com sucesso!`);
          this.router.navigate(['/lista-autores']);
        },
        error: erro => {
          alert('Houve um erro ao cadastrar o autor, tente novamente mais tarde.');
        }
      });
    }else{
      alert('Por favor, insira os dados corretamente!')
    }


  }
}
