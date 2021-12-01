import Axios from 'axios';

class Axiosservice{
    getmeth(url){
        return Axios.get(url);
    }
}

export default Axiosservice;