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


    task : Task;

    ngOnInit(){
        this.activateRoute.params.subscribe(params => {const i = +params['i'];
        this.task = this.taskService.data[i]});
    }
}