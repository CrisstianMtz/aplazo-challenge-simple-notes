import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UtilsService } from 'src/shared/services/utils.service';
import { Colors } from 'src/shared/Models/notes.model';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
/**
 * AddNoteComponent
 */
export class AddNoteComponent implements OnInit {
  /**
   * Variable to save user input
   */
  public note: FormGroup;

  /**
   * Constructor
   */
  constructor(public fb: FormBuilder, private utilsService: UtilsService) {
    this.buildForm();
  }

  /**
   * ngOnInit
   */
  ngOnInit(): void {}

  /**
   * Method to build form and set validators
   */
  private buildForm(): void {
    this.note = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-Z0-9 ]+$'),
        ],
      ],
      content: ['', [Validators.required, Validators.maxLength(250)]],
    });
  }

  /**
   * Method to save user inputs
   */
  public saveData(): void {
    let savedNotes = [];
    let noteId;

    if (localStorage.getItem('notes')) {
      savedNotes = JSON.parse(localStorage.getItem('notes'));
      noteId = savedNotes.length + 1;
    } else {
      noteId = 1;
    }

    const note = {
      id: noteId,
      title: this.note.value.title,
      content: this.note.value.content,
      date: new Date().toLocaleDateString('es-MX'),
      color: this.getRandomColor(),
    };

    savedNotes.push(note);

    localStorage.setItem('notes', JSON.stringify(savedNotes));
    this.note.reset();

    this.utilsService.sendNoteEvent('click');
  }

  /**
   * Method to get a random card color
   * @returns HEX color code
   */
  private getRandomColor(): string {
    const random = Math.floor(Math.random() * 11);

    switch (true) {
      case random > 8:
        return Colors.blue;
      case random > 6:
        return Colors.green;
      case random > 4:
        return Colors.pink;
      case random > 2:
        return Colors.purple;
      default:
        return Colors.yellow;
    }
  }
}
