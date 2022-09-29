function UseCheckToken() {
    let token = false;

    if (localStorage.getItem('accessToken')) {
        token = true;
    } else {
        token = false;
    }

    return token;
}

export default UseCheckToken;
