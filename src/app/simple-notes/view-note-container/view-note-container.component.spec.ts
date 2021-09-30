import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNoteContainerComponent } from './view-note-container.component';

describe('ViewNoteContainerComponent', () => {
  let component: ViewNoteContainerComponent;
  let fixture: ComponentFixture<ViewNoteContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNoteContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNoteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
