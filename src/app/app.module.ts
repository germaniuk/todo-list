import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { TodolistComponent }   from './todolist.component';
import { EditComponent } from './edit.component';
import {Routes, RouterModule} from '@angular/router';
import { TaskService } from './task.service';

const appRoutes: Routes =[
    { path: 'home', component: AppComponent},
    { path: 'task/:i', component: EditComponent}
];


@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, TodolistComponent, EditComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }