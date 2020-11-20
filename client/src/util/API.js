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
    save1: function(param) {
        return axios.put('/user/save1', param);
    },
    save2: function(param) {
        return axios.put('/user/save2', param);
    },
    save3: function(param) {
        return axios.put('/user/save3', param);
    }


};