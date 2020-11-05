import { SessionService } from './shared/services/session/session.service';

import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { SingInUpComponent } from './shared/components/sing-in-up/sing-in-up.component';
import { ParticipantsService } from './shared/services/participants/participants.service';
import { NotificationsService } from './shared/services/notifications/notifications.service';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';

export function initialize(sessionService: SessionService) {
  return (): Promise<any> => {
    return sessionService.loadUser();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingInUpComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    ParticipantsService,
    NotificationsService,
    SessionService,
    { provide: APP_INITIALIZER, useFactory: initialize, deps: [SessionService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
