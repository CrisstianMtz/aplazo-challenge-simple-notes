import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/shared/Models/notes.model';
import { UtilsService } from 'src/shared/services/utils.service';

@Component({
  selector: 'app-view-note-container',
  templateUrl: './view-note-container.component.html',
  styleUrls: ['./view-note-container.component.scss'],
})
/**
 * ViewNoteContainerComponent
 */
export class ViewNoteContainerComponent implements OnInit {
  /**
   * Save notes to print at DOM
   */
  public notes: Array<Note>;

  /**
   * Constructor
   */
  constructor(private utilsService: UtilsService) {}

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    this.displayNotes();
  }

  /**
   * Method to get all notes and listen to new notes
   */
  private displayNotes(): void {
    if (localStorage.getItem('notes')) {
      this.notes = JSON.parse(localStorage.getItem('notes'));
    }

    this.utilsService.sendNoteObservable.subscribe((response) => {
      if (response) {
        this.notes = JSON.parse(localStorage.getItem('notes'));
      }
    });
  }

  /**
   * Method to delete all notes saved in local storage
   */
  public onDeleteAllNotes(): void {
    localStorage.removeItem('notes');
    this.utilsService.sendNoteEvent('click');
  }

  /**
   * Method to delete selected note
   */
  public deleteSelectedNote(id: number): void {
    const selectedNote = this.notes.findIndex((note) => id === note.id);

    this.notes.splice(selectedNote, 1);

    localStorage.setItem('notes', JSON.stringify(this.notes));

    if (!this.notes.length) {
      this.onDeleteAllNotes();
    }
  }
}
