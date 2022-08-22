import { RouterModule } from '@angular/router';
import { NavegacaoComponent } from './navegacao.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [NavegacaoComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [NavegacaoComponent]
})
export class NavegacaoModule { }
