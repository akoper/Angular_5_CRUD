import {Injectable} from '@angular/core';
import {Task} from "./task";
import {TASKS} from "./mock-task";
import {Observable} from "rxjs/Observable";
import {of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from "@angular/common/http";
//import {MessageService} from "primeng/components/common/messageservice";

@Injectable()
export class TaskService {

    constructor(private http: HttpClient) {
    }

    private tasksUrl = 'http://mgd.test/api/tasks';

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.tasksUrl)
    }

    // getTasks(): Observable<Task[]> {
    //     return of(TASKS);
    // }

    // getTasks(): Task[] {
    //   return TASKS
    // }
}
