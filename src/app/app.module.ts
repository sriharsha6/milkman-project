import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';

import { MatInputModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MatDatepickerModule, MatNativeDateModule, MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatAutocompleteModule } from '@angular/material';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatFormFieldModule } from '@angular/material';
import { UsersComponent } from './users/users.component';
import { CalenderComponent } from './calender/calender.component';
import { ProductsComponent } from './products/products.component';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { PersonalpaymentsComponent } from './personalpayments/personalpayments.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { AddingproductsComponent } from './addingproducts/addingproducts.component';
import { AddingpersonalpaymentsComponent } from './addingpersonalpayments/addingpersonalpayments.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UsersComponent,
    CalenderComponent,
    ProductsComponent,
    DashboardhomeComponent,
    HomeComponent,
    FooterComponent,
    PersonaldetailsComponent,
    PersonalpaymentsComponent,
    UserregistrationComponent,
    AddingproductsComponent,
    AddingpersonalpaymentsComponent,
  


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    routes,
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
