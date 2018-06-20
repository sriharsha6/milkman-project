import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalpaymentsComponent } from './personalpayments.component';

describe('PersonalpaymentsComponent', () => {
  let component: PersonalpaymentsComponent;
  let fixture: ComponentFixture<PersonalpaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalpaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalpaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
