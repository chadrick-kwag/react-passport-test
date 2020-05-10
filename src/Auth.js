const Auth ={
    isAuthenticated : false,
    async authenticate(){
        await fetch('/api/authenticate').then(res => res.json())
        .then(data => {

            console.log(data)
            if(data.authenticated){
                this.isAuthenticated = true
            }
            else{
                this.isAuthenticated = false
            }

            console.log("authenticate done. isAuthenticated = " + this.isAuthenticated)
        }).catch(err=>{
            this.isAuthenticated = false
            console.log(err)
        })
    },

    signout(){
        this.isAuthenticated = false
    }
}


export default Auth