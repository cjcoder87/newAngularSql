import { Component, OnInit } from '@angular/core';
import '../scenarios.js';


@Component({
  selector: 'app-in-progress2',
  templateUrl: './in-progress2.component.html',
  styleUrls: ['./in-progress2.component.css', '../in-progress2/in-progress2.component.css']
})
export class InProgress2Component implements OnInit {

  constructor() { }

  ngOnInit() {

    getScenarios();
  }

}
