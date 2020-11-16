import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {
  loadedPlace: Place;

  constructor(private placeService: PlacesService,
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/tab1');
        return;
      }
      const placeId = paramMap.get('placeId');
      this.loadedPlace = this.placeService.getCurrentPlace(placeId);
    })
  }

  onBookPlace() {
    this.navCtrl.navigateBack('/places/tabs/tab1');
  }

}
