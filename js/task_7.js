class Client {
    #loginPassword;
    #email;

    constructor(loginPassword, email){
        this.#loginPassword = loginPassword;
        this.#email = email;
    }

    get getloginPassword(){
        return this.#loginPassword;
    }

    get getEmail(){
        return this.#email;
    }

    set setLoginPassword(value){
        this.#loginPassword = value;
    }

    set setEmail(value){
        this.#email = value;
    }
}

const user = new Client('qwerty', 'some-email@gmail.com');
console.log(user.getloginPassword) 
user.setLoginPassword = '123456'
console.log(user.getloginPassword) 