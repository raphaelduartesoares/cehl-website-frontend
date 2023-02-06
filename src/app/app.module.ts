import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxNotifierModule } from "ngx-notifier";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./views/components/footer/footer.component";
import { DoacaoComponent } from "./views/pages/doacao/doacao.component";
import { LinksComponent } from "./views/pages/links/links.component";
import { CalendarComponent } from './views/pages/calendar/calendar.component';

@NgModule({
    declarations: [AppComponent, LinksComponent, DoacaoComponent, FooterComponent, CalendarComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, NgxNotifierModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
