import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListaLivrosComponent } from './lista-livros/lista-livros.component';
import { ListaAutoresComponent } from './lista-autores/lista-autores.component';
import { InsereAutorComponent } from './insere-autor/insere-autor.component';
import { EditaAutorComponent } from './edita-autor/edita-autor.component';
import { InsereLivroComponent } from './insere-livro/insere-livro.component';
import { EditaLivroComponent } from './edita-livro/edita-livro.component';
import { MensagemModule } from './shared/mensagem/mensagem.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavegacaoModule } from './navegacao/navegacao.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaLivrosComponent,
    ListaAutoresComponent,
    InsereAutorComponent,
    EditaAutorComponent,
    InsereLivroComponent,
    EditaLivroComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MensagemModule,
    FontAwesomeModule,
    NavegacaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
