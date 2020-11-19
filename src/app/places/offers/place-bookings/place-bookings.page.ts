import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationCancel } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-bookings',
  templateUrl: './place-bookings.page.html',
  styleUrls: ['./place-bookings.page.scss'],
})
export class PlaceBookingsPage implements OnInit {

  place: Place;

  constructor(private route: ActivatedRoute,
    private navCtrl: NavController,
    private pService: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/tab2');
        return;
      }
      this.place = this.pService.getCurrentPlace(paramMap.get('placeId'));
    });
  }

}
