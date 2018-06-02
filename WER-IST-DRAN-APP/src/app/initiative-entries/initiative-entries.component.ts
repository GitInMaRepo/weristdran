import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initiative-entries',
  templateUrl: './initiative-entries.component.html',
  styles: ['../../styles.css']
})
export class InitiativeEntriesComponent implements OnInit {

  constructor() { }

  initiativeEntries : string[] = [];

  ngOnInit() {
    this.initiativeEntries[0] = "Neuer Eintrag";
  }
}
