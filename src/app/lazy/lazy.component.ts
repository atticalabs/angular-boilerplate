import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {

  cards: any
  constructor(private cardService: CardsService) { }
  
  ngOnInit(): void {
    this.cards = this.cardService.cards;
  }

}
