import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.css"]
})
export class PaginationComponent {
  pages: Array<object> = [
    { selected: true, number: 1 },
    { selected: false, number: 2 },
    { selected: false, number: 3 }
  ];
}
