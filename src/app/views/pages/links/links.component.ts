import { Component } from "@angular/core";

@Component({
    templateUrl: "./links.component.html",
    styleUrls: ["./links.component.scss"],
})
export class LinksComponent {
    urlCalendarEventsApple =
        "webcal://calendar.google.com/calendar/ical/ffe2f7f4cd54afaeb8863335953386a081d430d13b595bd79150504ed831f2a1@group.calendar.google.com/public/basic.ics";
    urlCalendarEventsGoogle =
        "https://calendar.google.com/calendar/render?cid=ffe2f7f4cd54afaeb8863335953386a081d430d13b595bd79150504ed831f2a1@group.calendar.google.com";

    urlCalendarEvents = "";

    constructor() {
        const userAgent = navigator.userAgent;
        if (userAgent.indexOf("iPhone") !== -1) {
            this.urlCalendarEvents = this.urlCalendarEventsApple;
        } else {
            this.urlCalendarEvents = this.urlCalendarEventsGoogle;
        }
    }
}
