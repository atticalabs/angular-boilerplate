import { CardsService } from "./cards.service";
import { Component, OnInit } from "@angular/core";

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

  constructor(private cardsService: CardsService) {}

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
