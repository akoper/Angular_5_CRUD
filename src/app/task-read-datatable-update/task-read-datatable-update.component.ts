import { Component, OnInit } from '@angular/core';
import {TaskService} from "../task.service";
import {Task} from "../task";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-task-read-datatable-update',
  templateUrl: './task-read-datatable-update.component.html',
  styleUrls: ['./task-read-datatable-update.component.css']
})

export class TaskReadDatatableUpdateComponent implements OnInit {

    constructor(private taskService: TaskService) {}

    private task:Task;

    datatableUpdateForm: FormGroup;

    getTasks(): void {
        this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
    }

    ngOnInit() {
        this.datatableUpdateForm = new FormGroup({
            user_id: new FormControl(),
            zone: new FormControl('', Validators.required),
        })
        this.getTasks();
    }

    get user_id() {
        return this.datatableUpdateForm.get('proj_id');
    }
    get zone() {
        return this.datatableUpdateForm.get('zone');
    }

    onSubmit() {
        if(this.datatableUpdateForm.valid) {
            this.task = this.datatableUpdateForm.value;
            this.taskService.addTask(this.task).subscribe(tasks => this.task = tasks);
        } else {
            alert("Failed validation!");
        }
    }

}
