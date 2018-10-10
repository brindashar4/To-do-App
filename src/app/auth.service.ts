export class AuthService {

    loggedIn = false;

    onLogin(){
        this.loggedIn = true;
    }

    onLogout(){
        this.loggedIn = false;
    }

    isAuthenicated() {
        return this.loggedIn;
    }
}