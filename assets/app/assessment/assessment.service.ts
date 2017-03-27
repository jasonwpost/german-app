import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Assessment } from "./assessment.model";


@Injectable()
export class AssessmentService {
  constructor(private http: Http) {}

  create(userID){
    let newAssessment = {
      artikels: [],
      artikelAssessment: [],
    }
    const body = JSON.stringify(newAssessment);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token =  '?token=' + userID;
    return this.http.post('http://localhost:3000/assessment' + token, body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
  }
}
