import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: "app-alert-message",
  templateUrl: "./alert-message.component.html",
  styleUrls: ["./alert-message.component.css"]
})
export class AlertMessageComponent implements OnInit {
  @Input() type: string;
  @Input() message: string;
  @Output() dismiss = new EventEmitter();

  close(): void {
    this.dismiss.emit();
  }

  ngOnInit(): void {}
}
