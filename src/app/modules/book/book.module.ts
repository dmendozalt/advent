import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book/book.component';
import { AngularMaterialModule } from '@shared/angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BookRoutingModule,
    AngularMaterialModule
  ]
})
export class BookModule { }
