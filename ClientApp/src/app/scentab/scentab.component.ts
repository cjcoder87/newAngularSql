import { ScenarioService, Scenario} from './../services/scenario.service';
import {Component, OnInit, ViewChild, QueryList, AfterViewInit} from '@angular/core';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-scentab',
  templateUrl: './scentab.component.html',
  styleUrls: ['./scentab.component.css']
})

export class ScentabComponent implements AfterViewInit{

  displayedColumns: string[] = ['radio', 'scenario', 'owner', 'date', 'version', 'status'];
  arrScenarios: string[];
  dataSource = new MatTableDataSource<Scenario>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ScenarioService: ScenarioService) {
    //  this.ScenarioService.getAllScenarios1().subscribe(data => this.arrScenarios = data);
    // this.dataSource = new MatTableDataSource(this.arrScenarios);

  // this.dataSource = new MatTableDataSource(this.arrScenarios);

  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
    
   }
   
  
   ngAfterViewInit() {
    this.ScenarioService.getAllScenarios1().subscribe(data => {
      this.dataSource.data = data;
      console.log(this.dataSource.data);
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  ngOnInit() {

   
      // this.ScenarioService.getAllScenarios1().subscribe(
      //   res => {
      //     this.arrScenarios = res;
      //     this.dataSource = new MatTableDataSource(this.arrScenarios);
      //   }
      // );

    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    
    // this.arrScenarious$ = this.ScenarioService.getAllScenarios1();
          // FILL THE ARRAY WITH DATA.
        // this.dataSource.paginator = this.paginator;	 // FILL THE ARRAY WITH DATA.
        // this.ScenarioService.getAllScenarios1().subscribe((arrScenarios: IScenario[]) => {

          // do stuff with our data here.
          // ....
    
          // asign data to our class property in the end
          // so it will be available to our template
          // this.arrScenarios = scenarios;
    


      // })


      //data with broken sort
    
  }

  

}
