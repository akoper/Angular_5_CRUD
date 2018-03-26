import {Component, OnInit} from '@angular/core';
import {Task} from '../task';
import { TaskService} from "../task.service";

@Component({
    selector: 'app-task-read',
    templateUrl: './task-read.component.html',
    styleUrls: ['./task-read.component.css']
})

export class TaskReadComponent implements OnInit {

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
