import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-demo',
  templateUrl: './animation-demo.component.html',
  styleUrls: ['./animation-demo.component.css'],
  animations: [trigger('openClose', [
    state('open', style({
      height: '250px',
      width:'600px',
      backgroundColor: '#5ebd59'

    })),
    state('closed', style({
      height: '125px',
      width:'500px',
      backgroundColor: '#55a199'
    })),
    transition('open=>closed', [
      animate('1s')
    ]),
    transition('closed=>open', [
      animate('2s')
    ])
  ])]
})
export class AnimationDemoComponent implements OnInit {
  isOpen = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {

    this.isOpen = !this.isOpen;
  }

}
