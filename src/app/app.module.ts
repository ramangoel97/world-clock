import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ClockComponent } from "./clock/clock.component";
import { ClockListComponent } from "./clock-list/clock-list.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: "", component: ClockListComponent }]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ClockComponent,
    ClockListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
