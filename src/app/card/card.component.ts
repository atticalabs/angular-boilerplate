import {Component, Input, NgModule} from '@angular/core';

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent {}

@Component({
  selector: "app-card-image",
  template: `
      <img class="w-full h-48 object-cover" src="{{source}}" alt="card image">
  `
})
export class CardImageComponent {
  @Input() source: string;
}

@Component({
  selector: "app-card-title",
  template: `
    <div class="font-bold text-xl mb-2 text-black">
      <ng-content></ng-content>
    </div>
  `
})
export class CardTitleComponent {}

@Component({
  selector: "app-card-content",
  template: `
    <div class="p-4 text-gray-700 text-base"><ng-content></ng-content></div>
  `
})
export class CardContentComponent {}

@Component({
  selector: "app-card-footer",
  template: `
    <div class="px-6 py-4"><ng-content></ng-content></div>
  `
})
export class CardFooterComponent {}

@Component({
  selector: "app-card-tag",
  template: `
    <div
      class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
    >
      <ng-content></ng-content>
    </div>
  `
})
export class CardTagComponent {}

@NgModule({
  exports: [
    CardTagComponent,
    CardFooterComponent,
    CardTitleComponent,
    CardContentComponent,
    CardComponent,
    CardImageComponent
  ],
  declarations: [
    CardTagComponent,
    CardFooterComponent,
    CardTagComponent,
    CardTitleComponent,
    CardContentComponent,
    CardComponent,
    CardImageComponent
  ]
})
export class CardModule{}
