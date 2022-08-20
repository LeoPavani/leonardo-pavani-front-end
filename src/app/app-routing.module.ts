import { EditaLivroComponent } from './edita-livro/edita-livro.component';
import { InsereLivroComponent } from './insere-livro/insere-livro.component';
import { EditaAutorComponent } from './edita-autor/edita-autor.component';
import { InsereAutorComponent } from './insere-autor/insere-autor.component';
import { ListaLivrosComponent } from './lista-livros/lista-livros.component';
import { ListaAutoresComponent } from './lista-autores/lista-autores.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'lista-autores',
    component: ListaAutoresComponent,
  },
  {
    path: 'insere-autor',
    component: InsereAutorComponent,
  },
  {
    path: 'edita-autor/:autorId',
    component: EditaAutorComponent,
  },
  {
    path: 'lista-livros',
    component: ListaLivrosComponent,
  },
  {
    path: 'insere-livro',
    component: InsereLivroComponent,
  },
  {
    path: 'edita-livro/:livroId',
    component: EditaLivroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
