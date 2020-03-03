import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import {MenuJour } from '../Models/menu-jour';
import {URL} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MunuJourService {

  constructor(private httpClient : HttpClient) { }

  getMenusJour():Observable<MenuJour[]>
    {
      return this.httpClient.get<MenuJour[]>(URL+'/menus').pipe();
    }

}
