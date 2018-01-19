import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';

@Component({
    selector: 'todolist-component',
    templateUrl: './template.component.html'
})
export class TodolistComponent { 
    tasks:  Task[];
    
    constructor(private taskService: TaskService){

    }

    ngOnInit(){
        this.tasks = this.taskService.data;
    }

    addTask(text: string): void{
        this.taskService.addData(text);
    }

    deleteTask(index: any) {
        this.taskService.deleteData(index);
    }
}