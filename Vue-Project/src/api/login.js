import axios from 'axios'


export async function login(user){
    let result;
    result = await axios({
        url:'http://127.0.0.1:7001/login',
        method:'post',
        data:user
    });
    return result.data;
    // alert('result in api'+result)
    // return result;
}

  