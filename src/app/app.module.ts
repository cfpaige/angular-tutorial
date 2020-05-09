import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KittensComponent } from './kittens/kittens.component';
import { KittenDetailComponent } from './kitten-detail/kitten-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    KittensComponent,
    KittenDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }