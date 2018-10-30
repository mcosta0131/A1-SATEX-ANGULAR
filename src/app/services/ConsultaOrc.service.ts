import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError }                from 'rxjs/operators';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { ConsultaOrcModel } from '../model/ConsultaOrc';

@Injectable()
export class ConsultaOrcService {

  constructor(private http : HttpClient) { }
  private url : string = "/assets/data/consultaOrc.json";


  getOrcametos() : Observable<ConsultaOrcModel[]>{
    return this.http.get<ConsultaOrcModel[]>(this.url)
    .pipe(
			catchError(this.handleError)
		);
  }

  handleError(error : HttpErrorResponse){
    return Observable.throw(error.message || "Server error");
  }
}
