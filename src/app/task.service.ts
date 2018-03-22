import {Injectable} from '@angular/core';
import {Task} from "./task";
//import {TASKS} from "./mock-task";
import {Observable} from "rxjs/Observable";
import {of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from "@angular/common/http";
//import {MessageService} from "primeng/components/common/messageservice";

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

    // addTask (task: Task): Observable<Task> {
    //     return this.http.post<Task>(this.tasksUrl, task, httpOptions).pipe(
    //         tap((task: Task) => this.log(`added task w/ id=${task.id}`)),
    //         catchError(this.handleError<Task>('addTask'))
    //     );
    // }

    /** GET: get all tasks from the server */
    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.tasksUrl)
    }

    // when tasks is seperate file of json
    // getTasks(): Observable<Task[]> {
    //     return of(TASKS);
    // }

    // when tasks is array in file
    // getTasks(): Task[] {
    //   return TASKS
    // }
}
