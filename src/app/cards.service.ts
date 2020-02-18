import { Injectable } from "@angular/core";
interface Card {
  title: string;
  text: string;
  imageUrl: string;
  tags: Array<string>;
}

@Injectable({
  providedIn: "root"
})
export class CardsService {
  cards: Array<Card> = [
    {
      title: "Card 1",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
        "Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      imageUrl: "/assets/sunset.jpg",
      tags: ["#photography", "#travel", "#sunset"]
    },
    {
      title: "Card 2",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
        "Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      imageUrl: "/assets/beach.jpg",
      tags: ["#photography", "#sunset"]
    },
    {
      title: "Another Card",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
        "Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      imageUrl: "/assets/brujas.jpg",
      tags: []
    }
  ];
  constructor() {}
}
