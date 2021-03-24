import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { ProductLsitComponent } from './product-lsit/product-lsit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnimalListComponent,
    ProductLsitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
