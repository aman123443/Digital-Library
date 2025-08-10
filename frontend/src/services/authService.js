import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const API_URL = 'http://localhost:8080/api/auth/';

const register = (username, email, password) => {
    return axios.post(API_URL + 'register', { username, email, password });
};

const login = async (username, password) => {
    const response = await axios.post(API_URL + 'login', { username, password });
    if (response.data.jwt) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    const userStr = localStorage.getItem('user');
    if (!userStr) return null;

    const user = JSON.parse(userStr);
    const decodedJwt = jwtDecode(user.jwt);

    if (decodedJwt.exp * 1000 < Date.now()) {
        logout();
        return null;
    }
    return user;
};

const authService = { register, login, logout, getCurrentUser };
export default authService;