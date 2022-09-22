import instance from ".";

const api = {
    async postLogout() {
        return await instance({
            url:"/logout",
            method: 'POST',
        });

    },
    async postLogin(data){
       return await instance({
            url:"/login",
            method: 'POST',
            data: data
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