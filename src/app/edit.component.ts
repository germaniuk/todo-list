import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from './task.service';


@Component({
    selector: 'edit-component',
    templateUrl: './edit.component.html'
})

export class EditComponent { 

    constructor(private activateRoute: ActivatedRoute, private taskService: TaskService){
         
    }


    private i: number;
    task : Task;

    ngOnInit(){
        this.activateRoute.params.subscribe(params => this.i = +params['i']);
        this.task = this.taskService.data[this.i];
    }
}