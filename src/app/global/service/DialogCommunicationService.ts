// dialog-communication.service.ts

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogCommunicationService {
  private dialogRefClosed = new Subject<void>();

  notifyDialogClosed(): void {
    this.dialogRefClosed.next();
  }

  get dialogClosed$() {
    return this.dialogRefClosed.asObservable();
  }
}
