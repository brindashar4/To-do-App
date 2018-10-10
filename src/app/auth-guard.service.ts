import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate{
    flag: boolean;

    constructor(private router: Router,
                private auth: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {

         
        this.flag = this.auth.isAuthenicated();
        if(this.flag){
            return true;
        }else{
            this.router.navigate(['/']);
        }
    }
}