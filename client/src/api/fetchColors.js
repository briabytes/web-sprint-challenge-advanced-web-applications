import axiosWithAuth from '../auth/axiosWithAuth';

export const fetchColors = () => {
    axiosWithAuth().get('/colors')
    .then((res) => {
        console.log(res)
    return res;
    })
    .catch((err) => {
        return err
    })
}
    
