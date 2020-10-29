
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { SingInUpComponent } from './shared/components/sing-in-up/sing-in-up.component';
// SERVICES
import { ParticipantsService } from './shared/services/participants/participants.service';
import { NotificationsService } from './shared/services/notifications/notifications.service';
// ANGULAR MATERIAL
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingInUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [
    ParticipantsService,
    NotificationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
