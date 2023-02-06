import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalendarComponent } from "./views/pages/calendar/calendar.component";
import { DoacaoComponent } from "./views/pages/doacao/doacao.component";
import { LinksComponent } from "./views/pages/links/links.component";

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "links" },
    { path: "links", component: LinksComponent },
    { path: "doacao", component: DoacaoComponent },
    { path: "doacoes", redirectTo: "/doacao" },
    { path: "doar", redirectTo: "/doacao" },
    { path: "doe", redirectTo: "/doacao" },
    { path: "calendario", component: CalendarComponent },
    { path: "eventos", redirectTo: "/calendario" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
