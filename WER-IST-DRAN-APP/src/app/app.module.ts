import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InitiativeEntryComponent } from './initiative-entry/initiative-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    InitiativeEntryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
