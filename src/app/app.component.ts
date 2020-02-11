import { Component } from "@angular/core";
import { CardsService } from "./cards.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-boilerplate";

  cards = this.cardsService.cards;

  constructor(private cardsService: CardsService) {}
}
