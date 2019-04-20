import JsonP from 'jsonp'
import axios from 'axios'
import {Modal} from 'antd'

    export default class Axios {
    //options 传一个大对象
    static jsonp(options){
        //resolve 调用成功；reject 调用失败
        return new Promise((resolve,reject)=>{
            JsonP(options.url,{
                param:'callback'
                //err 失败；response 响应
            },function (err,response) {
                // to-do
                // debugger;
                if(response.status='success'){
                    resolve(response);
                }else {
                    reject(response.message)
                }
            })
        })
    }

        static ajax(options){
            let loading ;
            if(options.data && options.data.isShowLoading !== false){
                loading = document.getElementById('ajaxLoading');
                //block显示loading
                loading.style.display = 'block';
            }
            let baseApi = 'https://www.easy-mock.com/mock/5c84ccabcfb6692c295163b4/BikeSharingAPI'
            return new Promise((resolve,reject)=>{
                axios({
                    url:options.url,
                    method:'get',
                    baseURL:baseApi,
                    timeout:10000,
                    params:(options.data && options.data.params)  || "",
                }).then((response)=>{
                    if(options.data && options.data.isShowLoading !== false){
                        loading = document.getElementById('ajaxLoading');
                        //none 关闭loading
                        loading.style.display = 'none';
                    }
                    if(response.status=="200"){
                        let res = response.data
                        if(res.code == '0'){
                            resolve(res);
                        }else {
                            Modal.info({
                                title:"提示",
                                content:res.msg
                            })
                        }
                    }else{
                        reject(response.data)
                    }
                })
            });
        }


}