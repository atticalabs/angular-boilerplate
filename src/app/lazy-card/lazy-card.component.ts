import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-card',
  templateUrl: './lazy-card.component.html',
  styleUrls: ['./lazy-card.component.css']
})
export class LazyCardComponent implements OnInit {

@Input()
title: string;
@Input()
source: string;
@Input()
tags: string[];


  constructor() { }

  ngOnInit(): void {
  }

}
