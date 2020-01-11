import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://gorest.co.in/public-api',
});

const checkTokenInterceptor = (config) => {
    const token = localStorage.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
};

const responseSuccessInterceptor = (response) => {
    const data = response.data;

    if (!data._meta.success) {
        return { error: data.result };
    }

    return { response: data };
};

const networkErrorInterceptor = (error) => {
    const responseError = error?.response?.data;

    return { error: responseError || error };
};

api.interceptors.request.use(checkTokenInterceptor);
api.interceptors.response.use(responseSuccessInterceptor, networkErrorInterceptor);
