class Authentication { 

    getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    getHeader() {
        let headers = {
            'Authorization': 'Bearer ' + this.getUser().stsTokenManager.accessToken,
            'Content-Type': 'application/json'
        }

        return headers;
    }
    
}

export default new Authentication();