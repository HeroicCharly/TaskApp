import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';

@NgModule({
  imports: [BrowserModule, SharedModule, FormsModule],
  declarations: [AppComponent, TodoItemComponent, AddTodoComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
