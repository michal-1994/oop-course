class Validator {
    static REQUIRED = 'REQUIRED';
    static MIN_LENGTH = 'MIN_LENGTH';

    static validate(val, flag, validatorVal) {
        if (flag === this.REQUIRED) {
            return val.trim().length > 0;
        }
        if (flag === this.MIN_LENGTH) {
            return val.trim().length > validatorVal;
        }
    }
}

class User {
    constructor(uName, uPassword) {
        this.userName = uName;
        this.password = uPassword;
    }

    greet() {
        console.log('Hi, I am ' + this.userName);
    }
}

class UserInputForm {
    constructor() {
        this.form = document.getElementById('user-input');
        this.userNameInput = document.getElementById('username');
        this.paswordNameInput = document.getElementById('password');

        this.form.addEventListener('submit', this.signupHandler.bind(this));
    }

    signupHandler(e) {
        e.preventDefault();
        const enteredUserName = this.userNameInput.value;
        const enteredPassword = this.paswordNameInput.value;

        if (!Validator.validate(enteredUserName, Validator.REQUIRED) || 
        !Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5)) {
            console.log('Ivalid input - username or password is wrong (password should be at least six chars)');
            return;
        }

        const newUser = new User(enteredUserName, enteredPassword);
        console.log(newUser);
        newUser.greet();
    }
}

new UserInputForm();