import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPasswordyComponent } from './ng-passwordy.component';

describe('NgPasswordyComponent', () => {
  let component: NgPasswordyComponent;
  let fixture: ComponentFixture<NgPasswordyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgPasswordyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPasswordyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
