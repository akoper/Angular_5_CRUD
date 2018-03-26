import {Injectable} from '@angular/core';
import {Task} from "./task";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TaskService {

    constructor(private http: HttpClient) {
    }

    private tasksUrl = 'http://mgd.test/api/tasks';

    /** POST: add a new task to the server */
    addTask (task: Task): Observable<Task> {
        return this.http.post<Task>(this.tasksUrl, task, httpOptions);
    }

    /** GET: get all tasks from the server */
    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.tasksUrl)
    }

}
