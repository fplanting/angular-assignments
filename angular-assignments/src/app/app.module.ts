import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { PrintAnimalComponent } from './components/print-animal/print-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    PrintAnimalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
