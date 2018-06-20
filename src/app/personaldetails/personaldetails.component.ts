import { routes } from './../app.router';
import { FormControl, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {
  milks= [
    {value: 'Ammul-0', viewValue: 'Ammul'},
    {value: 'Fullcream-1', viewValue: 'Fullcream'},
    {value: 'Heritage-2', viewValue: 'Heritage'}
  ];
  form=new FormGroup({
    name : new FormControl('',Validators.required),
    phno: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    flatno: new FormControl('',Validators.required),
    locality: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    state : new FormControl('',Validators.required),
    pincode:new FormControl('',Validators.required)
  })

  constructor() { }

  ngOnInit() {
  }

}
