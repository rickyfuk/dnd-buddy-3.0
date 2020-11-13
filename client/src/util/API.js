import axios from "axios";

export default {
    generateName: function() {
        return axios.get('/api/charnameone');
    },
    login: function() {
        return axios.get('api/login');
    },
    register: function() {
        return axios.get('api/register');
    }

};