import { Component } from '@angular/core';
import { Task } from './task';

@Component({
    selector: 'todolist-component',
    templateUrl: './template.component.html'
})
export class TodolistComponent { 
    tasks: Task[] = 
    [
        { description: "Найти роботу", done: false},
        { description: "Сделать todo-list", done: true}
    ];
    addTask(text: string): void {
         
        if(text==null || text==undefined || text.trim()=="")
            return;
        this.tasks.push(new Task(text));
    }
    deleteTask(index: any) {
        this.tasks.splice(index, 1);
      }
}