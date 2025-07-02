import axios from 'axios';
import type {IProducts} from "../models/IProducts.ts";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProductsResponseModel} from "../models/IProductsResponseModel.ts";
import {retriveLocalStorage} from "./helpers.tsx";
import type {ITokenPairs} from "../models/ITokenPairs.ts";

type LoginData = {
    username: string,
    password: string,
    expiresInMins: number
}
const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {},
});

export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
    // Через аксіос інстансе робимо запит передаючи username, password, expiresInMins як об'єкт
    const {data: userWithTokens} = await axiosInstance.post('/login', {username, password, expiresInMins});
    console.log(userWithTokens);
    // Сетає в локал сторедж
    localStorage.setItem('user', JSON.stringify(userWithTokens))
    // Повертаємо, бо тоді буде валити помилка в повернені промісу
    return userWithTokens;
}

//     Викликаємо перехват
axiosInstance.interceptors.request.use((request) => {
    //     Якщо метод відповідає гет - метод вказується в верхньому регістрі
    if (request.method?.toUpperCase() === 'GET') {
        //     додаємо хедер авторізейшен
        request.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken;
        //     обов'язково пробіл після 'Bearer '
    }
    return request
})

export const loadAuthResources = async (): Promise<IProducts[]> => {
    // Через аксіос інстансе робимо запит на отримання продуктів або інших об'єктів
    const {data: {products}} = await axiosInstance.get<IProductsResponseModel>('/products')
    // Повертаємо, бо тоді буде валити помилка в повернені промісу
    return products
}

export const refresh = async () => {
//     витягуємо юзера з його токенами
    const IUserWithTokens =retriveLocalStorage<IUserWithTokens>('user');
    //     робимо пост запит з рефреш токеном, передаючи рефрештокен і час, отримуємо нову пару токенів
    const {data: {accessToken, refreshToken}}= await axiosInstance.post<ITokenPairs>('/refresh', {
        refreshToken: IUserWithTokens.refreshToken,
        expiresInMins: 1
    });
    console.log(accessToken);
    console.log(refreshToken);
    //     Оновлюємо токени в юзері
    IUserWithTokens.accessToken = accessToken;
    IUserWithTokens.refreshToken = refreshToken;
    //     і сетаємо юзера з оновленими токенами в локал сторедж
    localStorage.setItem('user', JSON.stringify(IUserWithTokens))
}