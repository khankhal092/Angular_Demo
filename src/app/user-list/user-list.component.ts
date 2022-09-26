import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // @Input() item: any;
  @Output() parentFunction: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  sendData() {
    let datas = { name: 'khankhal', age: 20 }
    this.parentFunction.emit(datas)
  }
}
