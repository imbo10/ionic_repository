import { Component } from '@angular/core';
import { RestaurantsService } from '../service/restaurants.service';
import { Restaurant } from '../Models/restaurant';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage {

  ionViewDidEnter(){
    this.getRestaurants();

  }

  restaurants : Restaurant[];

  constructor(private api : RestaurantsService) { 
    this.getRestaurants();
  }

  getRestaurants() : void
  {
    this.api.getRestaurants().subscribe(Response=>{
      this.restaurants = Response;
    });
  }

  
}
