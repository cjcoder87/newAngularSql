import { DataSource } from '@angular/cdk/table';
import { ScenarioService, Scenario} from './../services/scenario.service';
import {Component, OnInit, ViewChild, QueryList, AfterViewInit} from '@angular/core';
import {MatSort, MatTableDataSource, MatPaginator, Sort} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as $ from '../../../node_modules/jquery/dist/jquery.min.js';
// import '../rowcolor.js'

@Component({
  selector: 'app-scentab',
  templateUrl: './scentab.component.html',
  styleUrls: ['./scentab.component.css']
})

export class ScentabComponent implements AfterViewInit{

  displayedColumns: string[] = ['radio', 'scenario', 'owner', 'date', 'version', 'status'];
  arrScenarios: string[];
  dataSource = new MatTableDataSource<Scenario>();

  sortData = function(){};

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ScenarioService: ScenarioService) {

   }

  //  Filter

   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
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

    $(document).ready(function () {

      $("input[type='radio']").click(function() {
            // if (event.target.type !== 'radio') {
            //     $(':radio', this).trigger('click');
            // }
  
            console.log('HTML clicked');
        });

      // $('html').click(function() {
      //     // if (event.target.type !== 'radio') {
      //     //     $(':radio', this).trigger('click');
      //     // }

      //     console.log('HTML clicked');
      // });
  
      // $("input[type='radio']").change(function (e) {
      //     e.stopPropagation();
      //     $('.record_table tr').removeClass("highlight_row");        
      //     if ($(this).is(":checked")) {
      //         $(this).closest('tr').addClass("highlight_row");
      //     }     
      // });
  });
    
  }

  

}
