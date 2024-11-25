class loginPage{
        email:string
        password:string
        login:string;
        loginForm:string;
        homePageVisible:string
    constructor(){
        this.homePageVisible='[class="md-company-switcher"]'
        this.email='[name="email"]'
        this.password='[name="password"]'
        this.loginForm='.login-block'
    }
}

export default loginPage;