import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Scenario} from '../models/scenario.model'

// export interface Scenario {
//   id: number;
//   scenarioname: string;
//   scenarioowner: string;
//   scenarioversion: string;
//   scenariostatus: string;
//   scenariodate: string;
// }

@Injectable({
  providedIn: 'root'
})



export class ScenarioService {

  constructor(private httpService: HttpClient) { }


  getAllScenarios1():Observable<Scenario[]> {
    return this.httpService.get<Scenario[]>('http://localhost:8080/api/scenarios');
  }


  create(scenario){
    return this.httpService.post('http://localhost:8080/api/scenarios', scenario).subscribe(data => console.log(data));;
  }
  

}
