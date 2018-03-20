import {Component, OnInit} from '@angular/core';
import {Task} from '../task';
import { TaskService} from "../task.service";

@Component({
    selector: 'app-task-read',
    templateUrl: './task-read.component.html',
    styleUrls: ['./task-read.component.css']
})

export class TaskReadComponent implements OnInit {

    title = 'Read Tasks';

    tasks: Task[];

    constructor(private taskService: TaskService) {
    }

    getTasks(): void {
        this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
    }

    // getTasks(): void {
    //     this.tasks = this.taskService.getTasks();
    // }

    ngOnInit() {
        this.getTasks();
    }

    // tasks = [
    //     new Task(
    //         1,
    //         2,
    //         "Omnis quia quam dicta ut",
    //         "Ea voluptatem labore enim totam quia commodi doloribus.",
    //         "2018-04-07",
    //         "2018-04-12"
    //     ),
    //     new Task(
    //         2,
    //         3,
    //         "assumenda cupiditate ad saepe atque",
    //         "Eligendi quasi quod veniam culpa fugit nulla ipsam.",
    //         "2018-04-02",
    //         "2018-04-18"
    //     ),
    //     new Task(
    //         3,
    //         5,
    //         "et nobis et delectus et",
    //         "Tempore vitae distinctio ut.",
    //         "2018-05-07",
    //         "2018-05-12"
    //     )
    // ];

    // tasks = [
    //     {
    //         id: 1,
    //         user_id: 2,
    //         name: "Omnis quia quam dicta ut",
    //         description: "Ea voluptatem labore enim totam quia commodi doloribus.",
    //         start_date: "2018-04-07",
    //         end_date: "2018-04-12"
    //     },
    //     {
    //         id: 2,
    //         user_id: 3,
    //         name: "assumenda cupiditate ad saepe atque",
    //         description: "Eligendi quasi quod veniam culpa fugit nulla ipsam.",
    //         start_date: "2018-04-07",
    //         end_date: "2018-04-12"
    //     }
    // ];

}
