import {Component, OnInit} from '@angular/core';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Task} from "../task";
import { TaskService} from "../task.service";

@Component({
    selector: 'app-task-create',
    templateUrl: './task-create.component.html',
    styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

    // submitted = false;

    constructor(private taskService: TaskService) {
    }

    addTask(name: string): void {
        // name = name.trim();
        console.log(name);
        if (!name) { return; }
        this.taskService.addTask({ name } as Task)
            .subscribe();
    }

    ngOnInit() {
    }

    // onSubmit() {
    //     this.submitted = true;
    // }

}
