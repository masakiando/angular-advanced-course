import { Component, OnInit, Input } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.css']
})
export class AuFaInputComponent implements OnInit {
  @Input()
  icon: string;

  constructor() { }

  ngOnInit() {
  }

  get classes() {
    const cssClasses = {};
    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }
    return cssClasses
  }

}
