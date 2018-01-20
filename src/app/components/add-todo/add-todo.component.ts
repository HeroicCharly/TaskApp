import { Component } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';
import { EventEmitter } from '@angular/core/src/facade/async';
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
    if (this.todoText.length > 5) {
      let newTodo = new TodoElement();
      newTodo.text = this.todoText;
      newTodo.completionStatus = false;

      this.toggleInput();
      this.todoCreated.emit(newTodo);
    }
  }

  toggleInput(): void {
    this.todoText = '';
    this.displayInput = !this.displayInput;
  }
}
