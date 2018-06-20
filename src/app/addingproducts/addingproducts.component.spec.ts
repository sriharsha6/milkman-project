import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingproductsComponent } from './addingproducts.component';

describe('AddingproductsComponent', () => {
  let component: AddingproductsComponent;
  let fixture: ComponentFixture<AddingproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
