import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatsService } from '../service/plats.service';
import { MunuJourService } from '../service/munu-jour.service';
import { Plat } from '../Models/plat';
import { MenuJour } from '../Models/menu-jour';

@Component({
  selector: 'app-tab2',
  templateUrl: 'plats.page.html',
  styleUrls: ['plats.page.scss']
})
export class Tab2Page {
 
  ionViewDidEnter(){
    this.getMenusJour();

  }

   // champ qui contient la date du jour
   currentDate : string;
   
  plats : Plat [];
  menus : MenuJour[];
  constructor(private route : Router, private api : PlatsService, private apis: MunuJourService) {
    const date = new Date();
    const options = { weekday:'long', month:'long', day:'numeric'};
    this.currentDate  = date.toLocaleDateString('fr-FR', options);
    this.getMenusJour();
  }

  modifierPlat (id:any):void
  {
    this.route.navigate(['tabs/plats/modifier',id]);
  }

  getPlats() : void
  {
    this.api.getPlats().subscribe(Response=>{
      this.plats = Response;
    });
  }
  delete(plat:Plat):void
  {
    this.api.deletePlat(plat.id).subscribe(plat =>{
      this.getPlats();
    });
  }

  getMenusJour() : void
  {
    this.apis.getMenusJour().subscribe(Response=>{
      this.menus = Response;
    });
  }
}
