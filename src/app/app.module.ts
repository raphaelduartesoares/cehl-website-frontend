import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LinksComponent } from "./views/pages/links/links.component";
import { DoacaoComponent } from './views/pages/doacao/doacao.component';
import { FooterComponent } from './views/components/footer/footer.component';

@NgModule({
    declarations: [AppComponent, LinksComponent, DoacaoComponent, FooterComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
