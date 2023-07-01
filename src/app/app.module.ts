import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentcreateComponent } from './studentcreate/studentcreate.component'

import {ReactiveFormsModule} from '@angular/forms';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import { StudenteditComponent } from './studentedit/studentedit.component'

@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
    StudentcreateComponent,
    StudentdetailComponent,
    StudenteditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
