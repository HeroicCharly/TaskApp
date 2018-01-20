import { Component, Input } from '@angular/core';
import { TodoElement } from './../../models/todo-element';
import { Output } from '@angular/core/src/metadata/directives';
import { EventEmitter } from '@angular/core/src/facade/async';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todoItem: TodoElement;
  @Output() todoChanged: EventEmitter<TodoElement> = new EventEmitter();

  todoText: string;

  ngOnInit() {
    this.todoText = this.todoItem.text;
  }

  todoStatusChanged(event): void {
    this.todoItem.completionStatus = !this.todoItem.completionStatus;
    this.todoChanged.emit(this.todoItem);
  }
}
