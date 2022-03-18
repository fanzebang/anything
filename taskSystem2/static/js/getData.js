

import axios from 'axios';
import { Upload } from 'element-ui';
import router from "../../src/router/index"

axios.defaults.withCredentials=true
axios.defaults.crossDomain=true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default {

    ip:"http://microismile.cn:38084",

    getCookie(c_name) {
       if (document.cookie.length>0) {
           var c_start=document.cookie.indexOf(c_name + "=");
             　　if (c_start!=-1) {
                　　 c_start=c_start + c_name.length+1
                 　var c_end=document.cookie.indexOf(";",c_start);
                 　　if (c_end==-1) c_end=document.cookie.length;
                 　　return unescape(document.cookie.substring(c_start,c_end))
             　　}
         　　}
        　　 return ""
     　　},

     login(url,type,data){

       

        if(type == "post"){

         return   axios.post(this.ip+url,data,{

                headers:{
                    "Accept": "application/json;charset=UTF-8",
                }
            })
        }else{
            
        return   axios.get(this.ip+url,{},{
                headers:{
                    "Accept": "application/json;charset=UTF-8",
                }
            })


        }


    },


    getList(url,type,data){
        axios.interceptors.response.use(
            (response) => {
                if(response.data.code == 401){
                    router.push({path:'/login'})
                }else{
                    return response;
                }
            },
            (error) => {
                return Promise.reject(error.response)
            }
        )

        if(type == "post"){
         return   axios.post(this.ip+url,data,{
                headers:{
                    "Authorization": `Bearer ${this.getCookie("token")}`,
                    "Accept": "application/json;charset=UTF-8",
                }
            })
        }else{
            
        return   axios.get(this.ip+url,{},{
                headers:{
                    "Accept": "application/json;charset=UTF-8",
                    "token":this.getCookie("token")
                }
            })


        }


    },

    Upload(url,type,data,onUploadProgress){

        if(type == "post"){

            return   axios.post(this.ip+url,data,{
   
                   headers:{
                       "Authorization": `Bearer ${this.getCookie("token")}`,
                       "Accept": "application/json;charset=UTF-8",
                   },
                   onUploadProgress:onUploadProgress
               })
           }else{
               
           return   axios.get(this.ip+url,{},{
                   headers:{
                       "Accept": "application/json;charset=UTF-8",
                       "token":this.getCookie("token")
                   }
               })
   
   
           }

    }

   
}