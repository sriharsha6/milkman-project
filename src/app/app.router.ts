import { UserregistrationComponent } from './userregistration/userregistration.component';
import { PersonalpaymentsComponent } from './personalpayments/personalpayments.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { HomeComponent } from './home/home.component';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { ProductsComponent } from './products/products.component';
import { CalenderComponent } from './calender/calender.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AddingproductsComponent} from './addingproducts/addingproducts.component';
import {AddingpersonalpaymentsComponent} from './addingpersonalpayments/addingpersonalpayments.component';


import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

export const router:Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent}, 
    
    {path:'',redirectTo:'login', pathMatch:'full'},
    {path:'login',component:LoginComponent},
    
    
    {path:'dashboard',component:DashboardComponent,
    children:[
    {path:'',redirectTo:'dashboardhome',pathMatch:'full'},
    
    {path:'dashboardhome',component:DashboardhomeComponent},
    {path:'users',component:UsersComponent},
    {path:'calender',component:CalenderComponent},
    {path:'products',component:ProductsComponent},
    // {path:'addingpersonalpayments',component:AddingpersonalpaymentsComponent},
    {path:'personalpayments',component:PersonalpaymentsComponent},
    {path:'users/personaldetails',component:PersonaldetailsComponent},
    {path:'users/userregistration',component:UserregistrationComponent},
    {path:'users/personaldetails/personalpayments',component:PersonalpaymentsComponent},
    {path:'users/personaldetails/personalpayments/addingproducts',component:AddingproductsComponent},
    {path:'users/personaldetails/personalpayments/addingproducts/addingpersonalpayments',component:AddingpersonalpaymentsComponent}
   
    
    ]}
];

export const routes:ModuleWithProviders=RouterModule.forRoot(router);