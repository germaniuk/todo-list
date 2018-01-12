import { Component } from '@angular/core';
     
class Task{
    description: string;
    done: boolean;
     
    constructor(description: string) {
  
        this.description = description;
        this.done = false;
    }
}
 
@Component({
    selector: 'purchase-app',
    template: `<div class="page-header">
        <h1> Список задач </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-5">
                    <input class="form-control" [(ngModel)]="text" placeholder = "Описание задачи" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-4">
                    <button class="btn btn-default" (click)="addTask(text)">Добавить</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Задание</th>
                    <th>Выполнено</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let task of tasks; let i=index">
                    <td>{{task.description}}</td>
                    <td><input type="checkbox" [(ngModel)]="task.done" /></td>
                    <td><button class="btn btn-default" (click)="deleteTask(i)">Удалить</button><td>
                </tr>
            </tbody>
        </table>
    </div>`
})
export class AppComponent { 
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
    deleteTask(index) {
        this.tasks.splice(index, 1);
      }
}