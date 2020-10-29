import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private matSnackbar: MatSnackBar) { }

  successfullyRegistered() {
    this.matSnackbar.open('SUCCESSFULLY REGISTERED', 'ok', { duration: 3000 })
  }
}
