import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskReadDatatableComponent } from './task-read-datatable.component';

describe('TaskReadDatatableComponent', () => {
  let component: TaskReadDatatableComponent;
  let fixture: ComponentFixture<TaskReadDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskReadDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskReadDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
