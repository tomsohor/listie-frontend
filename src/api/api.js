import instance from ".";

const api = {

    async checkAuthentication(){
        return await instance({
            url:'/authenticate',
            method:'Get'
        })
    },

    async postSingUp(data) {
        return await instance({
            url:"/register",
            method: 'POST',
            data: data
        });

    },

    async postLogin(data){
       return await instance({
            url:"/login",
            method: 'POST',
            data: data
        });

    },

    async postLogout() {
        return await instance({
            url:"/logout",
            method: 'POST',
        });

    },


    async getAllData(){
        return await instance({
            url:'/',
            method:'Get'
        })
    }
}

export default api;