import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initiative-entries',
  templateUrl: './initiative-entries.component.html',
  styles: ['../../styles.css']
})
export class InitiativeEntriesComponent implements OnInit {

  constructor() { }

  initiativeEntries: string[] = [];
  editorVisible = false;
  visibleEditorNumber = 0;
  lastInput: string;

  ngOnInit() {
    this.initiativeEntries[0] = 'Neuer Eintrag';
  }

  addNewEntry() {
    this.initiativeEntries[this.initiativeEntries.length] = 'Neuer Eintrag';
  }

  deleteEntry(id: number) {
    this.initiativeEntries.splice(id, 1);
  }

  showEditor(id: number) {
    if (this.editorVisible) {
      this.initiativeEntries[id] = this.lastInput;
    }
    this.editorVisible = !this.editorVisible;
    this.visibleEditorNumber = id;
  }
 }
