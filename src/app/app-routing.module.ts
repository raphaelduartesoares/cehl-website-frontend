import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LinksComponent } from "./views/pages/links/links.component";

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "links" },
    { path: "links", component: LinksComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
