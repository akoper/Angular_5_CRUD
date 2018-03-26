import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from "@angular/forms";
import { Task } from "../task";
import { TaskService } from "../task.service";

@Component({
    selector: 'app-task-create',
    templateUrl: './task-create.component.html',
    styleUrls: ['./task-create.component.css']
})

export class TaskCreateComponent implements OnInit {

    constructor(private taskService: TaskService) {}

    private task:Task;

    taskForm: FormGroup;

    ngOnInit() {
        this.taskForm = new FormGroup({
            proj_id: new FormControl('', [
                Validators.min(4),
                Validators.max(10)
            ]),
            name: new FormControl('',
                Validators.required),
            description: new FormControl(),
            start_date: new FormControl('',
                Validators.required),
            end_date: new FormControl()
        })
    }

    get proj_id() { return this.taskForm.get('proj_id'); }
    get name() { return this.taskForm.get('name'); }
    get description() { return this.taskForm.get('description'); }
    get start_date() { return this.taskForm.get('start_date'); }
    get end_date() { return this.taskForm.get('end_date'); }

    onSubmit() {
        if(this.taskForm.valid) {
            this.task = this.taskForm.value;
            this.taskService.addTask(this.task).subscribe(tasks => this.task = tasks);
        }
    }

}
