import { CardsService } from "./cards.service";
import { Component, OnInit, Injector, PLATFORM_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../environments/environment.prod';
import { EnvironmentService } from './environment.service';
import * as settings from '../environments/settings';

const alerts: Array<object> = [
  {
    type: "error",
    message: "Oops! Something went wrong here."
  },
  {
    type: "success",
    message: "This is Peñarol, Potato!"
  },
  {
    type: "warning",
    message: "Guarda! Ojo!"
  }
];

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent implements OnInit {
  title = "angular-boilerplate";
  alerts: Array<object>;
  cards = this.cardsService.cards;

  constructor(
    private cardsService: CardsService,
    private injector: Injector,
    private env: EnvironmentService) {
    if (this.env.isServer) {
      const apiUrl = injector.get<string>(<any>'API_URL'); // Get value passed from Node Express Server
      this.env.setValueTransferState(settings.API_URL, apiUrl);
    }
  }

  ngOnInit() {
    this.setAlerts(alerts);
    if(this.env.isBrowser){
      console.log('API_URL', this.env.getValueTransferState(settings.API_URL)); //Read setting value from client side
    }
  }

  setAlerts(a) {
    this.alerts = a;
  }

  dismissAlert(item) {
    const newAlerts = this.alerts.filter(al => al !== item);

    this.setAlerts(newAlerts);
  }
}
