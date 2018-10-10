import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { ListComponent } from "./list/list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./auth-guard.service";

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch:'full' },
    { path: 'login', component: LoginComponent },
    { path: 'list', component: ListComponent, canActivate: [AuthGuard] },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class RoutingModule {

}