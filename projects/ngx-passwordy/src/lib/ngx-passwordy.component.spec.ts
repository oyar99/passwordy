import { DebugElement } from '@angular/core';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { NgxPasswordyComponent } from './ngx-passwordy.component';

describe('NgPasswordyComponent', () => {
  let component: NgxPasswordyComponent;
  let fixture: ComponentFixture<NgxPasswordyComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxPasswordyComponent],
      imports: [FormsModule, MatIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPasswordyComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should recognize an input tag', () => {
    expect(component.inputElement).toBeDefined();
  });

  it('should render only one input tag', () => {
    expect(de.queryAll(By.css('input')).length).toEqual(1);
  });

  it('should update value property of input', () => {
    const htmlInput = de.query(By.css('input')).nativeElement;
    const value = 'newValue';
    expect(htmlInput.value).toBeFalsy();
    component.writeValue(value);
    expect(htmlInput.value).toEqual(value);
  });

  it('should disable input', () => {
    const htmlInput = de.query(By.css('input')).nativeElement;
    expect(htmlInput.disabled).toBeFalsy();
    component.setDisabledState(true);
    expect(htmlInput.disabled).toBeTruthy();
  });

  it('should bind password value to component property', fakeAsync(() => {
    const value = 'newValue';
    component.passwordValue = value;
    fixture.detectChanges();
    tick();

    expect(de.query(By.css('input')).nativeElement.value).toBe(value);
  }));

  it('should render an icon if password value is truthy', fakeAsync(() => {
    expect(de.query(By.css('mat-icon'))).toBeFalsy();

    const value = 'newValue';
    component.passwordValue = value;
    fixture.detectChanges();
    tick();

    expect(de.query(By.css('mat-icon'))).toBeTruthy();
  }));

  it('should show password if mat-icon is being pressed', () => {
    expect(component.showPassword).toBeFalsy();

    const value = 'newValue';
    component.passwordValue = value;

    fixture.detectChanges();

    const eyeIcon = de.query(By.css('mat-icon')).nativeElement;

    const mouseDownEvent = new MouseEvent('mousedown');

    eyeIcon.dispatchEvent(mouseDownEvent);

    expect(component.showPassword).toBeTruthy();

    const mouseUpEvent = new MouseEvent('mouseup');

    eyeIcon.dispatchEvent(mouseUpEvent);

    expect(component.showPassword).toBeFalsy();
  });

  it('should show corresponding eye icon if password is visible or not', () => {

    const VISIBILITY = 'visibility';
    const VISIBILITY_OFF = 'visibility_off';

    const value = 'newValue';
    component.passwordValue = value;

    fixture.detectChanges();

    const eyeIcon = de.query(By.css('mat-icon')).nativeElement;

    expect(eyeIcon.innerText).toBe(VISIBILITY);

    const mouseDownEvent = new MouseEvent('mousedown');

    eyeIcon.dispatchEvent(mouseDownEvent);

    fixture.detectChanges();

    expect(eyeIcon.innerText).toBe(VISIBILITY_OFF);

    const mouseUpEvent = new MouseEvent('mouseup');

    eyeIcon.dispatchEvent(mouseUpEvent);

    fixture.detectChanges();

    expect(eyeIcon.innerText).toBe(VISIBILITY);
  });
});
