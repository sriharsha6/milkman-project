import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingpersonalpaymentsComponent } from './addingpersonalpayments.component';

describe('AddingpersonalpaymentsComponent', () => {
  let component: AddingpersonalpaymentsComponent;
  let fixture: ComponentFixture<AddingpersonalpaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingpersonalpaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingpersonalpaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
