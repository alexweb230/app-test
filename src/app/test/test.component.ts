import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  displayName: boolean = false;
    displayN: boolean = true;


  @Input('parentData') public name;

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
    fireEvent(){
        this.childEvent.emit('go to parent');
    }
}
