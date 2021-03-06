import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserCreateComponent } from './user-create/user-create.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskReadComponent } from './task-read/task-read.component';
import { TaskShowComponent } from './task-show/task-show.component';
import { TableModule} from 'primeng/table';
import { HeroReadComponent } from './hero-read/hero-read.component';
import { HttpClientModule} from "@angular/common/http";
import { TaskService} from "./task.service";
import { TaskUpdateComponent } from './task-update/task-update.component';
import { TaskDeleteComponent } from './task-delete/task-delete.component';
import { DataTableModule} from "primeng/primeng";
import { HttpModule} from "@angular/http";


@NgModule({
    declarations: [
        AppComponent,
        UserCreateComponent,
        HomeComponent,
        TaskCreateComponent,
        TaskReadComponent,
        TaskShowComponent,
        HeroReadComponent,
        TaskUpdateComponent,
        TaskDeleteComponent,
    ],
    exports: [
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        TableModule,
        HttpClientModule,
        DataTableModule,
        HttpModule,
    ],
    providers: [TaskService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
