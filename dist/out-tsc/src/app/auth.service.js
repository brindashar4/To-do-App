var AuthService = /** @class */ (function () {
    function AuthService() {
        this.loggedIn = false;
    }
    AuthService.prototype.onLogin = function () {
        this.loggedIn = true;
    };
    AuthService.prototype.onLogout = function () {
        this.loggedIn = false;
    };
    AuthService.prototype.isAuthenicated = function () {
        return this.loggedIn;
    };
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map