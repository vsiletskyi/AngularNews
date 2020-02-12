import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SportComponent } from "./sport/sport.component";
import { ScienceComponent } from "./science/science.component";
import { TechnologyComponent } from "./technology/technology.component";
import { EntertainmentComponent } from "./entertainment/entertainment.component";
import { from } from "rxjs";

@NgModule({
  declarations: [
    AppComponent,
    SportComponent,
    ScienceComponent,
    TechnologyComponent,
    EntertainmentComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
