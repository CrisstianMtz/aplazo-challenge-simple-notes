import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
/**
 * UtilsService
 */
export class UtilsService {
  /**
   * Allow send messages to different observers
   */
  private onSendNote = new Subject<string>();

  /**
   * Auxiliary variable to simplify syntax
   */
  public sendNoteObservable = this.onSendNote.asObservable();

  /**
   * Constructor
   */
  constructor() {}

  /**
   * Method to send the event
   */
  public sendNoteEvent(msj: string): void {
    this.onSendNote.next(msj);
  }
}
