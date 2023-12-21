import $api from "../http";

export default class UserService {

    static async checkUser () {
            const response= await $api.get('/checkUser')
            console.log(response);
            if(response.status=='200'){

                return response.data.isAuth
            }else{
                return false
            }
    }


}