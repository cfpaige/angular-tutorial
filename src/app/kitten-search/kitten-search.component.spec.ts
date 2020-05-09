import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KittenSearchComponent } from './kitten-search.component';

describe('KittenSearchComponent', () => {
  let component: KittenSearchComponent;
  let fixture: ComponentFixture<KittenSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KittenSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KittenSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
