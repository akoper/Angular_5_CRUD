import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent} from "./home/home.component";
import { UserCreateComponent} from "./user-create/user-create.component";
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskReadComponent } from './task-read/task-read.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user-create', component: UserCreateComponent},
    { path: 'task-create', component: TaskCreateComponent},
    { path: 'task-read', component: TaskReadComponent},
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
