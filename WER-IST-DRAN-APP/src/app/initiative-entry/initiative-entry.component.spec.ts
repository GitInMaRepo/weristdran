import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiativeEntryComponent } from './initiative-entry.component';

describe('InitiativeEntryComponent', () => {
  let component: InitiativeEntryComponent;
  let fixture: ComponentFixture<InitiativeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiativeEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiativeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
