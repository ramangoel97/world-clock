import { AfterViewInit, Component, Input } from "@angular/core";

@Component({
  selector: "app-clock",
  templateUrl: "./clock.component.html",
  styleUrls: ["./clock.component.css"],
})
export class ClockComponent implements AfterViewInit {
  @Input() timeZone = "";

  hourHandStyle = {};
  minuteHandStyle = {};
  secondHandStyle = {};

  timerId: any;

  date: Date = new Date();
  hour: number = 0;
  minute: number = 0;
  second: number = 0;

  ngAfterViewInit() {
    this.timerId = this.getTime();
  }

  animateAnalogClock() {
    this.hourHandStyle = {
      transform: `translate3d(-50%, 0, 0) rotate(${
        this.hour * 30 + this.minute * 0.5 + this.second * (0.5 / 60)
      }deg)`,
    };

    this.minuteHandStyle = {
      transform: `translate3d(-50%, 0, 0) rotate(${
        this.minute * 6 + this.second * 0.1
      }deg)`,
    };

    this.secondHandStyle = {
      transform: `translate3d(-50%, 0, 0) rotate(${this.second * 6}deg)`,
    };
  }

  getTime() {
    return setInterval(() => {
      this.date = this.changeTimeZone(this.timeZone);
      this.hour = this.date.getHours();
      this.minute = this.date.getMinutes();
      this.second = this.date.getSeconds();

      this.animateAnalogClock();
    }, 1000);
  }

  changeTimeZone(timeZone: string) {
    return timeZone && timeZone.length > 0
      ? new Date(
          (new Date()).toLocaleString("en-US", {
            timeZone,
          })
        )
      : (new Date());
  }
}
