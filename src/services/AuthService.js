import $api from "../http";

export default class AuthService {
    static async login(login,password){
         return $api.post(`/login`,{login,password})
    }
    static async loginPhone(phone){
     return $api.post(`/loginPhone`,{phone})
}
    
    static async logouth(){
        return $api.post(`/logout`)
   }
}