import { Component, OnInit } from '@angular/core';
import '../scenarios.js';


@Component({
  selector: 'app-in-progress2',
  templateUrl: './in-progress2.component.html',
  styleUrls: ['./in-progress2.component.css']
})
export class InProgress2Component implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show';


  constructor() { }

  ngOnInit() {

    // getScenarios();
  }
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
}
