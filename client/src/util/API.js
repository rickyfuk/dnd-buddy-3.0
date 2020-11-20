import axios from "axios";

export default {
    generateName: function() {
        return axios.get('/api/charnameone');
    },
    login: function() {
        return axios.post('/user/login');
    },
    register: function() {
        return axios.post('/user/registeruser/');
    },
    getRace: function() {
        return axios.get('/api/charrace');
    },
    sendToDB: function(param) {
        return axios.post('/api/sendtodb', param);
    },
    save: function(param) {
        return axios.put('/user/save', param);
    }


};