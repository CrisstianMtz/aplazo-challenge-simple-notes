import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/shared/Models/notes.model';

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.scss'],
})
/**
 * ViewNoteComponent
 */
export class ViewNoteComponent implements OnInit {
  /**
   * Input of note content
   */
  @Input() public note: Note;

  /**
   *
   */
  @Output() noteId: EventEmitter<number> = new EventEmitter<number>();

  /**
   * Variable to determinate if marquee behavior should ve displayed
   */
  public showMarquee = false;

  /**
   * Variable to determinate if complete note should be displayed
   */
  public isActive = false;

  /**
   * Constructor
   */
  constructor() {}

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    this.shouldShowMarquee();
  }

  /**
   * Method to determinate if marquee behavior should be displayed
   */
  private shouldShowMarquee(): void {
    if (window.innerWidth <= 768) {
      if (this.note.title.length > 20) {
        this.showMarquee = true;
      }
    } else {
      if (this.note.title.length > 25) {
        this.showMarquee = true;
      }
    }
  }

  /**
   * Method to send selected note to be deleted
   */
  public deleteNote(): void {
    this.noteId.emit(this.note.id);
  }

  /**
   * Method to display or hide the note content
   */
  public displayNote(): void {
    this.isActive = !this.isActive;
  }
}
