import { CardsService } from "./cards.service";
import { Component, OnInit, Injector, PLATFORM_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';

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
    @Inject(PLATFORM_ID) private platformid) {
    if (!isPlatformBrowser(this.platformid)) {
      console.log('API_URL', injector.get<string>(<any>'API_URL'));
    }
  }

  ngOnInit() {
    this.setAlerts(alerts);
  }

  setAlerts(a) {
    this.alerts = a;
  }

  dismissAlert(item) {
    const newAlerts = this.alerts.filter(al => al !== item);

    this.setAlerts(newAlerts);
  }
}
