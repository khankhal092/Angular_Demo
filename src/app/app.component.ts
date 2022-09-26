import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  // data = [
  //   {
  //     name: 'khankhal',
  //     age: 20
  //   },
  //   {
  //     name: 'ajay',
  //     age: 24
  //   },
  //   {
  //     name: 'raj',
  //     age: 18
  //   }
  // ]
  name = '';
  age = '';
  parentComponent(data: any) {
    console.log(data);
    this.name = data.name
    this.age = data.age
  }
}
