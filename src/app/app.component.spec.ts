import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { AlertMessageComponent } from "./alert-message/alert-message.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { CardModule } from "./card/card.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { BrowserModule } from "@angular/platform-browser";
import { CardsService } from "./cards.service";
import { APP_BASE_HREF } from "@angular/common";
import { Router } from "@angular/router";
class RouterStub {
  url = "";
  navigate(commands: any[], extras?: any) {}
}

describe("AppComponent", () => {
  beforeEach(async(() => {
    RouterTestingModule.withRoutes([
      { path: "example", component: AppComponent }
    ]);

    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        CardModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatSelectModule
      ],
      providers: [
        CardsService,
        { provide: APP_BASE_HREF, useValue: "/" },
        { provide: Router, useClass: RouterStub }
      ],
      declarations: [AppComponent, AlertMessageComponent, PaginationComponent]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-boilerplate'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("angular-boilerplate");
  });

  it("should render title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "Angular Boilerplate"
    );
  });
});
