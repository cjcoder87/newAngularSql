import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


export interface PeriodicElement {
 
  radio: string,
  scenario: string;
  owner : string;
  date: string;
  version: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {radio: "1", scenario: 'EA1A.1', owner: 'Ted', date: "15 Jan 2018", version: '1.0', status: "Pending Aprroval"},
  {radio: "2", scenario: 'CPS + M97', owner: 'Ferdy', date: "15 Jun 2018", version: '1.2', status: "Testing and Analysys"},
  {radio: "3", scenario: 'EA1A.1', owner: 'Johnny', date: "15 Aug 2018", version: '1.3', status: "Pending Aprroval"},
  {radio: "4", scenario: 'PS + M97', owner: 'Chris', date: "15 Dec 2018", version: '1.4', status: "Testing and Analysys"}
];

@Component({
  selector: 'app-scentab',
  templateUrl: './scentab.component.html',
  styleUrls: ['./scentab.component.css']
})
export class ScentabComponent implements OnInit {
  displayedColumns: string[] = ['radio', 'scenario', 'owner', 'date', 'version', 'status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  @ViewChild(MatSort) sort: MatSort;

  constructor(private httpService: HttpClient) { }

  arrScenarios: string [];

  ngOnInit() {

    // this.dataSource.sort = this.sort;

    this.httpService.get('./assets/birds.json').subscribe(
      data => {
        this.arrScenarios = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

    
  }

  

}
