import { Router } from '@angular/router';
import { AutorInput } from './../models/autor-input';
import { AutoresService } from './../services/autores.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insere-autor',
  templateUrl: './insere-autor.component.html',
  styleUrls: ['./insere-autor.component.scss']
})
export class InsereAutorComponent implements OnInit {

  cadastroForm!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private autoresService: AutoresService) { }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      biografia: ['', [Validators.required]]
    });
  }

  salvarAutor(){
    if(this.cadastroForm.valid){
      var autor = this.cadastroForm.getRawValue() as AutorInput;

      this.autoresService.insereAutor(autor).subscribe({
        next: autorOutput => {
          alert(`O autor ${autorOutput.nome}  foi cadastrado com sucesso!`);
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
