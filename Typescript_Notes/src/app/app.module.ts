import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypesComponent } from './components/types/types.component';
import { TypeScriptTutorial1Component } from './components/type-script-tutorial1/type-script-tutorial1.component';

@NgModule({
  declarations: [
    AppComponent,
    TypesComponent,
    TypeScriptTutorial1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
