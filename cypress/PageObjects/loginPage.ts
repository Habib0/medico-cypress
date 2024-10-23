class loginPage{
        email:string
        password:string
        login:string;
        loginForm:string;
    constructor(){
        this.email='[name="email"]'
        this.password='[name="password"]'
        this.loginForm='[class="login-block"]'
    }
}

export default loginPage;