import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  loadedPlace: Place;
  constructor(private placesService: PlacesService,
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (!this.activatedRoute.snapshot.paramMap.has('placeId')) {
      this.navCtrl.navigateBack('/places/tabs/tab2');
      return;
    }
    const placeId = this.activatedRoute.snapshot.paramMap.get('placeId');
    this.loadedPlace = this.placesService.getCurrentPlace(placeId);
    console.log('test');
  }

}
