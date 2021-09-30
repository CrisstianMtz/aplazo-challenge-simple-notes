import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleNotesComponent } from './simple-notes/simple-notes.component';
import { AddNoteComponent } from './simple-notes/add-note/add-note.component';
import { ViewNoteContainerComponent } from './simple-notes/view-note-container/view-note-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewNoteComponent } from './simple-notes/view-note-container/view-note/view-note.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleNotesComponent,
    AddNoteComponent,
    ViewNoteContainerComponent,
    ViewNoteComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
