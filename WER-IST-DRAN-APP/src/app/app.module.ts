import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InitiativeEntriesComponent } from './initiative-entries/initiative-entries.component';

const appRoutes: Routes = [
  { path: '', component: InitiativeEntriesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InitiativeEntriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
