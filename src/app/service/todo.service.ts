import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {Todo} from  "./../model/Todo";


@Injectable({
  providedIn: 'root'
})
export class TodoService {
 
  todos: Todo[];

  constructor() {
     this.todos = [
       {
         id:'111',
         title:'Learn C++',
         isComplete:true,
         date:new Date(),
       },

       {
        id:'112',
        title:'Learn Java',
        isComplete:true,
        date:new Date(),
      },

      {
        id:'113',
        title:'Learn Python',
        isComplete:true,
        date:new Date(),
      },

       
     ]
   }
   getTodos(){
     return of(this.todos)
   }
   addTodos(todo:Todo){
     this.todos.push(todo)
   }
   changeTodo(todo:Todo){
     this.todos.map(singleTodo =>{
       if(singleTodo.id == todo.id){
         todo.isComplete =!todo.isComplete
       }
     })
   }
   deleteTodo(todo:Todo){
     const index=this.todos.findIndex(
       (currentObj) => currentObj.id===todo.id
     );
     this.todos.splice(index,1);
   }
}
