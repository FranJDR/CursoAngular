import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private matSnackbar: MatSnackBar) { }

  private open(message: string) {
    this.matSnackbar.open(message, 'ok', { duration: 3000 });
  }

  successfullyEdited() { this.open('Successfully Edited.'); }
  successfullyRegistered() { this.open('Successfully Registered.'); }
  closedSession() { this.open('Closed Session.'); }
  sessionStarted() { this.open('Session Started.'); }
  itemDelete() { this.open('Item delete.'); }
  itemCreate() { this.open('Item create.'); }
  itemEdit() { this.open('Item edit.'); }
  addedToFavorites() { this.open('Added to Favorites'); }


}
