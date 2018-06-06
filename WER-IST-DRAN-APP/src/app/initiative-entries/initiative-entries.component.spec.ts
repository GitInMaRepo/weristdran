import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InitiativeEntriesComponent } from './initiative-entries.component';
import { COMPONENT_VARIABLE } from '@angular/platform-browser/src/dom/dom_renderer';
import { FormsModule } from '@angular/forms';

describe('InitiativeEntryComponent', () => {
  let component: InitiativeEntriesComponent;
  let fixture: ComponentFixture<InitiativeEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InitiativeEntriesComponent
      ],
      imports: [
        FormsModule
      ]
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

    describe('An initiative entry', () => {
      it('should remove an entry', () => {
        const compiled = fixture.debugElement.nativeElement;
        component.addNewEntry();
        fixture.detectChanges();
        component.deleteEntry(1);
        fixture.detectChanges();
        expect(compiled.querySelector('#entry1')).toBeNull();
      });

      it('should not show the editor by default', () => {
        const compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();
        expect(compiled.querySelector('#input0').style.visibility).toBe('hidden');
      });

      it('should show the editor on button edit click', () => {
        const compiled = fixture.debugElement.nativeElement;
        component.showEditor(0);
        fixture.detectChanges();
        expect(compiled.querySelector('#input0').style.visibility).toBe('visible');
      });

      it('should hide the editor on second button edit click', () => {
        const compiled = fixture.debugElement.nativeElement;
        component.showEditor(0);
        fixture.detectChanges();
        component.showEditor(0);
        fixture.detectChanges();
        expect(compiled.querySelector('#input0').style.visibility).toBe('hidden');
      });

      it('should hide the default entry on button edit click', () => {
        const compiled = fixture.debugElement.nativeElement;
        component.showEditor(0);
        fixture.detectChanges();
        expect(compiled.querySelector('#view0').style.visibility).toBe('hidden');
      });

      it('should show the editor of the third entry on button edit click', () => {
        const compiled = fixture.debugElement.nativeElement;
        component.addNewEntry();
        component.addNewEntry();
        component.showEditor(2);
        fixture.detectChanges();
        expect(compiled.querySelector('#input0').style.visibility).toBe('hidden');
        expect(compiled.querySelector('#input2').style.visibility).toBe('visible');
      });

      it('should change a text entry on input', () => {
        const compiled = fixture.debugElement.nativeElement;
        component.addNewEntry();
        component.showEditor(1);
        component.lastInput = 'Wubbalubb';
        component.showEditor(1);
        fixture.detectChanges();
        expect(compiled.querySelector('#view1').textContent).toBe('Wubbalubb');
      });
    });
  });
});
