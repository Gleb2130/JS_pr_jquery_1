'use strict';

class Controller{

    constructor(){
        this._login = document.getElementById('login');
        this._pass1 = document.getElementById('pass1');
        this._pass2 = document.getElementById('pass2');
        this._email = document.getElementById('email');

        this._loginError = document.getElementById('login-err');
        this._pass1Error = document.getElementById('pass1-err');
        this._pass2Error = document.getElementById('pass2-err');
        this._emailError = document.getElementById('email-err');

        this._form = document.getElementById('reg-form');
        console.log('Controler -> Created');
        this._validator = new Validator();
    }

    activateLoginListener(){
        this._login.addEventListener('blur',()=>{
            this._validator.checkLogin(this._login.value);
            if (this._validator.loginIsValid){
                this._login.style.boxShadow = '0px 0px 10px Green';
                this._loginError.innerHTML = '';
            }
            else{
                this._login.style.boxShadow = '0px 0px 10px Red';
                this._loginError.innerHTML = '\
                Логін має бути довжиною від 6 до 16 символів, \
                серед яких дозволені маленькі та великі букви\
                або цифри, а також - символ [_]\
                ';
            }
        });
        console.log('Controler -> activateLoginListener -> Created');
    }

    activatePass1Listener(){
        this._pass1.addEventListener('blur',()=>{
            this._validator.checkPass1(this._pass1.value);

            if (this._validator.pass1IsValid){
                this._pass1.style.boxShadow = '0px 0px 10px Green';
                this._pass1Error.innerHTML = '';
            }
            else{
                this._pass1.style.boxShadow = '0px 0px 10px Red';
                this._pass1Error.innerHTML = '\
                пароль має бути довжиною від 8 символів, \
                серед яких дозволені маленькі та великі букви\
                або цифри, а також - символ [_]\
                та повинен мати 1 велику будку одну маленьку та 1 цифру\
                ';
            }
        });
        console.log('Controler -> activatePass1Listener -> Created');
    }
    
    activatePass2Listener(){
        this._pass2.addEventListener('blur',()=>{
            this._validator.checkPass2(this._pass1.value,this._pass2.value);

            if (this._validator.pass2IsValid){
                this._pass2.style.boxShadow = '0px 0px 10px Green';
                this._pass2Error.innerHTML = '';
            }
            else{
                this._pass2.style.boxShadow = '0px 0px 10px Red';
                this._pass2Error.innerHTML = '\
                Підтвердження пароля має бути вашим паролем\
                ';
            }
        });
        console.log('Controler -> activatePass2Listener -> Created');
    }

    activateEmailListener(){
        this._email.addEventListener('blur',()=>{
            this._validator.checkEmail(this._email.value);
            if (this._validator.emailIsValid){
                this._email.style.boxShadow = '0px 0px 10px Green';
                this._emailError.innerHTML = '';
            }
            else{
                this._email.style.boxShadow = '0px 0px 10px Red';
                this._emailError.innerHTML = '\
                Емейл повинен маты @,\
                дозволені великі та маленькі букви\
                та цифри, а також - символи [_-]\
                ';
            }
        });
        console.log('Controler -> activateEmailListener -> Created');
    }
}