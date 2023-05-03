import axios, {AxiosResponse} from "axios";
import {MainState} from "../../pages/Main/Main";


// Апишку нашел с собаками, которую дали для тестового - не работает
const instance = axios.create({
    baseURL: 'https://dog.ceo/api/breed/hound',
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
})

const appApi = {
    fetchCategories(){
        return instance.get('/list')
            .then((response: AxiosResponse<MainState>) => {
                return response.data
            })
    },
    fetchPhotos(category: string){
        return instance.get(`${category}/images/random/6`)
            .then((response: AxiosResponse<MainState>) => {
                return response.data
            })
    }
}

export default appApi;
