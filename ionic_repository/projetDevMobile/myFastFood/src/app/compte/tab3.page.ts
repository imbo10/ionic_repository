import { Component } from '@angular/core';
import { ActionSheetController, Platform, AlertController } from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsMapTypeId,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  map: GoogleMap;

  constructor(
    public alertController: AlertController,
    public actionCtrl: ActionSheetController,
    private platform: Platform
  ) {
    if (this.platform.is('cordova')) {
      this.loadMap();
    }
  }

  loadMap() {
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyDxhqh0FxytmukPW6pnK4v-9lY4nHs9G14',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyDxhqh0FxytmukPW6pnK4v-9lY4nHs9G14'
    });
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 14.713317,
          lng: -17.481621
        },
        zoom: 12,
        tilt: 30
      }
    });
  }

  async mapOptions() {
    const actionSheet = await this.actionCtrl.create({
      buttons: [{
        text: 'Satellite',
        handler: () => {
          console.log('Satellite clicked');
          this.map.setMapTypeId(GoogleMapsMapTypeId.SATELLITE);
        }
      }, {
        text: 'Plan',
        handler: () => {
          console.log('Plan clicked');
          this.map.setMapTypeId(GoogleMapsMapTypeId.NORMAL);
        }
      }, {
        text: 'Terrain',
        handler: () => {
          console.log('Terrain clicked');
          this.map.setMapTypeId(GoogleMapsMapTypeId.TERRAIN);
        }
      }, {
        text: 'Annuler',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  placeMarker(markerTitle: string) {
    const marker: Marker = this.map.addMarkerSync({
       title: markerTitle,
       icon: 'red',
       animation: 'DROP',
       position: this.map.getCameraPosition().target
    });
 }

 async addMarker() {
  const alert = await this.alertController.create({
    header: 'Ajouter un emplacement',
    inputs: [
      {
        name: 'title',
        type: 'text',
        placeholder: 'Le titre'
      }
    ],
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ajouter',
        handler: data => {
          console.log('Titre: ' + data.title);
          this.placeMarker(data.title);
        }
      }
    ]
  });
  await alert.present();
}

}
