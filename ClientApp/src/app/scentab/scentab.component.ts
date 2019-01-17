import { DataSource } from '@angular/cdk/table';
import { ScenarioService} from './../services/scenario.service';
import {Component, OnInit, ViewChild, QueryList, AfterViewInit} from '@angular/core';
import {MatSort, MatTableDataSource, MatPaginator, Sort} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
// import '../../../node_modules/jquery/dist/jquery.min.js';

import { Scenario } from '../models/scenario.model';



@Component({
  selector: 'app-scentab',
  templateUrl: './scentab.component.html',
  styleUrls: ['./scentab.component.css']
})

export class ScentabComponent implements OnInit{
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource;
  displayedColumns = ['radio','scenario', 'owner', 'date', 'version', 'status'];
  

  constructor(private scenarioService: ScenarioService) {

   }

  //  Filter

  //  applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
  
  ngOnInit() {

    this.scenarioService.getAllScenarios1().subscribe(results => {
      if(!results){
        return;
      }
    this.dataSource = new MatTableDataSource(results);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    });
  }


}