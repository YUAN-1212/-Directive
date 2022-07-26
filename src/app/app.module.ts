import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppModalModule } from 'app-modal/src/app/app-modal/app-modal.module';

import { LabelHintDirective } from './label-hint.directive'; // 此次新增
import { NoteComponent } from './NoteComponent/NoteComponent'; // 此次新增



const MaterialModules = [
  MatDialogModule,
];

const Directives = [
  LabelHintDirective
];

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ...Directives,
    ...MaterialModules,
  ],
  declarations: [
    AppComponent,
    LabelHintDirective,
    NoteComponent,
    ...Directives,

  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //AppModalModule,
    ...MaterialModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
