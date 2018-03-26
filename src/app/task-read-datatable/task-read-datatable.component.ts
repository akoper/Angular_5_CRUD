import {Component, OnInit} from '@angular/core';
import {Task} from "../task";
import {TaskService} from "../task.service";

@Component({
    selector: 'app-task-read-datatable',
    templateUrl: './task-read-datatable.component.html',
    styleUrls: ['./task-read-datatable.component.css']
})

export class TaskReadDatatableComponent implements OnInit {

    tasks: Task[];

    constructor(private taskService: TaskService) {
    }

    getTasks(): void {
        this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
    }

    ngOnInit() {
        this.getTasks();

    }

}
