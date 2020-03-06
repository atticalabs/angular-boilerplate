import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyCardComponent } from './lazy-card.component';

describe('LazyCardComponent', () => {
  let component: LazyCardComponent;
  let fixture: ComponentFixture<LazyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
