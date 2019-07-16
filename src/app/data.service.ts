import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCatFacts() {
    return this.http.get('https://cat-fact.herokuapp.com/facts/random');
    //return this.http.get('https://api.chucknorris.io/jokes/random');
  }
}
