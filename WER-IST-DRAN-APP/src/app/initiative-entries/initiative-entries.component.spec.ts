import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InitiativeEntriesComponent } from './initiative-entries.component';

describe('InitiativeEntryComponent', () => {
  let component: InitiativeEntriesComponent;
  let fixture: ComponentFixture<InitiativeEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiativeEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiativeEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('the initative list', () => {
    it('should create the default entry', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#entry0')).toBeTruthy();
    });

    it('should create the edit button', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#edit0')).toBeTruthy();
    });

    it('should create the delete button', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#delete0')).toBeTruthy();
    });

    it('should create the add button', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#add')).toBeTruthy();
    });

    it('should add a new entry', () => {
      const compiled = fixture.debugElement.nativeElement;
      component.addNewEntry();
      fixture.detectChanges();
      expect(compiled.querySelector('#entry1')).toBeTruthy();
    });

    it('should remove an entry', () => {
      const compiled = fixture.debugElement.nativeElement;
      component.addNewEntry();
      fixture.detectChanges();
      component.deleteEntry(1);
      fixture.detectChanges();
      expect(compiled.querySelector('#entry1')).toBeNull();
    });
  });
});
