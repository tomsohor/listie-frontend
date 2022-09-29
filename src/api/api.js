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
    },


    async addItem(data){
        return await instance({
            url:'/item',
            method:'Post',
            data:data
        })
    },

    async deleteItem(id){
        console.log('111111',id)
        return await instance({
            url:'/item',
            method:'Delete',
            data:{id}
        })
    },

    async getItemDetails(id){
        return await instance({
            url:'/item/',
            method:'Get',
            params:{id}
        })
    }
    
}

export default api;
