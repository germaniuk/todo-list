import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { TodolistComponent }   from './components/todolist/todolist.component';
import { EditComponent } from './components/edit/edit.component';
import {Routes, RouterModule} from '@angular/router';
import { TaskService } from './services/task/task.service';

const appRoutes: Routes =[
    { path: '', component: TodolistComponent},
    { path: 'task/:i', component: EditComponent}
];


@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, TodolistComponent, EditComponent],
    bootstrap:    [ AppComponent ],
    providers:    [TaskService]
})
export class AppModule { }