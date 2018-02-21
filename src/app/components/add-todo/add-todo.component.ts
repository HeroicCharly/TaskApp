import { Component, Output, EventEmitter } from '@angular/core';
import { TodoElement } from './../../models/todo-element';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  @Output() todoCreated: EventEmitter<TodoElement> = new EventEmitter();

  displayInput: boolean = false;
  todoText: string;

  saveTodo(): void {
    let newTodo = new TodoElement();
    newTodo.text = this.todoText;
    newTodo.completionStatus = false;

    this.toggleInput();
    this.todoCreated.emit(newTodo);
  }

  toggleInput(): void {
    this.todoText = '';
    this.displayInput = !this.displayInput;
  }
}
