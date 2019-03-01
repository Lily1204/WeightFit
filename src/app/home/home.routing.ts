import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {} from "./pages/landing/landing.module"
const routes: Routes = [{
    path: '',
    loadChildren: './pages/welcome/welcome.module#WelcomeModule'
}, {
    path: "landing",
    loadChildren: "./pages/landing/landing.module#LandingModule",
}];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class HomeRoutingModule { }