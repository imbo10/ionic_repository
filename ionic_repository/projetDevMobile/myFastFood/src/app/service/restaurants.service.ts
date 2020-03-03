import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import {Restaurant } from '../Models/restaurant';
import {URL} from 'src/environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private httpClient : HttpClient) { }

  getRestaurants():Observable<Restaurant[]>
    {
      return this.httpClient.get<Restaurant[]>(URL+'/restaurants').pipe();
    }

}
