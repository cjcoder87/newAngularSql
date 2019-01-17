import { HttpClient } from '@angular/common/http';
import { ScenarioService } from './../services/scenario.service';
import { Component, OnInit } from '@angular/core';
import '../scenarios.js';
import { NgForm } from '@angular/forms';

// export interface Scenarios {
//   id:number;
//   scenarioname: string;
//   scenarioowner: string;
//   scenariodate: string;
//   scenarioversion: string;
//   scenariostatus: string;
  
// }

@Component({
  selector: 'app-in-progress2',
  templateUrl: './in-progress2.component.html',
  styleUrls: ['./in-progress2.component.css']
})


export class InProgress2Component implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show';
  // scenerio: Scenarios;
  


  constructor(private ScenarioService: ScenarioService) { }

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
  onSubmit(scenario: NgForm){
    console.log(scenario);
    // console.log(scenario.valid);
    this.ScenarioService.create(scenario);

  }

 



    

  }




