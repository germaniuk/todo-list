import { Task } from './task';

export class TaskService{
    data: Task[] = 
    [
        { description: "Найти роботу", done: false},
        { description: "Сделать todo-list", done: true}
    ];
    addData(text: string): void {
        
        if(text==null || text==undefined || text.trim()=="")
            return;
        this.data.push(new Task(text));
    }
    deleteData(index: any) {
        this.data.splice(index, 1);
    }

}