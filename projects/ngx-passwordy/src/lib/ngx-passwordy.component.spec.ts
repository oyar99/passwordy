import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPasswordyComponent } from './ngx-passwordy.component';

describe('NgPasswordyComponent', () => {
  let component: NgxPasswordyComponent;
  let fixture: ComponentFixture<NgxPasswordyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPasswordyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPasswordyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
