import { Component } from '@angular/core';
import { TodoElement } from './models/todo-element';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  originalTodoList: TodoElement[] = [
    { id: 1, completionStatus: false, text: 'Testing 1' },
    { id: 2, completionStatus: true, text: 'Testing 2' },
    { id: 3, completionStatus: false, text: 'Testing 3' },
    { id: 4, completionStatus: true, text: 'Testing 4' }
  ];

  currentDate: Date = new Date();
  todoList: TodoElement[];
  emptyTodo: TodoElement = new TodoElement();
  showCompleted: boolean = false;
  buttonText: string = 'Show';

  ngOnInit() {
    this.refreshTodoList();
  }

  toggleListItems() {
    if (this.showCompleted) {
      this.todoList = this.originalTodoList.filter(x => x.completionStatus == false);;
      this.showCompleted = false;
      this.buttonText = 'Show';
    } else {
      this.todoList = this.originalTodoList
      this.showCompleted = true;
      this.buttonText = 'Hide';
    }
  }

  refreshTodoList() {
    if (this.showCompleted) {
      this.todoList = this.originalTodoList;
    } else {
      this.todoList = this.originalTodoList.filter(x => x.completionStatus == false);
    }
  }

  onTodoCreated(event) {
    let newTodo = event as TodoElement;

    newTodo.id = this.getLastId() + 1;
    this.originalTodoList.push(newTodo);
    this.refreshTodoList();
  }

  private getLastId(): number {
    if (this.originalTodoList !== undefined) {
      var lastId = this.originalTodoList[this.originalTodoList.length - 1].id;

      return lastId !== undefined ? lastId : 0;
    }

    return 0;
  }
}
