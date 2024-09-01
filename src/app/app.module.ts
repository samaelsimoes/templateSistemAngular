import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './global/login/login.component';
import { RegisterUserComponent } from './global/register-user/register-user.component';
import { ModalAnimationsComponent } from './global/components/modal-animations/modal-animations.component';
import { DataPickerComponentsTsComponent } from './global/components/data-picker.components.ts/data-picker.components.ts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './global/home/home.component';
import { DashBoardModule } from './dashboard/model/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent,
    ModalAnimationsComponent,
    DataPickerComponentsTsComponent,
    HomeComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    DashBoardModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }