import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private readonly http: HttpClient,
  ) { }


  public testSevice(): Observable<any> {
    return this.http.get('https://httpbin.org/get');
  }
}
