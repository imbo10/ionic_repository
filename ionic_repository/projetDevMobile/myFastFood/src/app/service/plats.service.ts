  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { Plat } from '../Models/plat';
  import { URL } from 'src/environments/environment';

  @Injectable({
    providedIn: 'root'
  })
  export class PlatsService {

    currentDate: string;

    constructor(private httpClient : HttpClient) { 
      const date = new Date();
      const options = { weekday:'long', month:'long', day:'numeric'};
      this.currentDate  = date.toLocaleDateString('fr-FR', options);
    }

    postPlat(plat : Plat): Observable<Plat> {
      return this.httpClient.post<Plat>(URL+'/plats',plat).pipe();
    }
    getPlats():Observable<Plat[]>
    {
      return this.httpClient.get<Plat[]>(URL+'/plats').pipe();
    }

    getPlat(id :number):Observable<Plat>
    {
      return this.httpClient.get<Plat>(URL+'/plats/'+id).pipe();
    }

    deletePlat(id : number)
    {
      return this.httpClient.delete(URL+'/plats/'+id).pipe();
    }

    updatePlat(id : number, plat) : Observable <Plat>
    {
      return this.httpClient.put<Plat>(URL+'/plats/'+id, plat).pipe();
    }

  }
