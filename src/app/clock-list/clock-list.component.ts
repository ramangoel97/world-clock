import { Component } from "@angular/core";

@Component({
  selector: "app-clock-list",
  templateUrl: "./clock-list.component.html",
  styleUrls: ["./clock-list.component.css"],
})
export class ClockListComponent {
  timeZones = ["Europe/Berlin", "", "America/Los_Angeles"];
}
