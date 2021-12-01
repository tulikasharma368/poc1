import Axiosservice from './Axiosservice';
const obj = new Axiosservice();

class Userservice{
    Getpara(){
        let response = obj.getmeth('https://api.jsonbin.io/b/61518c844a82881d6c5642b4');
        return response;
    }
}

export default Userservice;