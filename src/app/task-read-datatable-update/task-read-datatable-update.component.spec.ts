import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskReadDatatableUpdateComponent } from './task-read-datatable-update.component';

describe('TaskReadDatatableUpdateComponent', () => {
  let component: TaskReadDatatableUpdateComponent;
  let fixture: ComponentFixture<TaskReadDatatableUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskReadDatatableUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskReadDatatableUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
