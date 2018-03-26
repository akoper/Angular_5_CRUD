import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent} from "./home/home.component";
import { UserCreateComponent} from "./user-create/user-create.component";
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskReadComponent } from './task-read/task-read.component';
import { TaskReadDatatableComponent} from "./task-read-datatable/task-read-datatable.component";
import { TaskReadDatatableUpdateComponent} from "./task-read-datatable-update/task-read-datatable-update.component";
import { TaskUpdateComponent} from "./task-update/task-update.component";
import { TaskDeleteComponent} from "./task-delete/task-delete.component";
import { TaskShowComponent} from "./task-show/task-show.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user-create', component: UserCreateComponent},
    { path: 'task-create', component: TaskCreateComponent},
    { path: 'task-read', component: TaskReadComponent},
    { path: 'task-read-datatable', component: TaskReadDatatableComponent},
    { path: 'task-read-datatable-update', component: TaskReadDatatableUpdateComponent},
    { path: 'task-update', component: TaskUpdateComponent},
    { path: 'task-delete', component: TaskDeleteComponent},
    { path: 'task-show', component: TaskShowComponent},
    // { path: 'codecraft', component: TaskShowComponent},
]

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ],
})

export class AppRoutingModule {
}
