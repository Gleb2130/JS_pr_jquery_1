'use strict';

// window.addEventListener('load', ()=>{
//     console.log('ValidationDemo -> Start');
//     const controller = new Controller();

//     controller.activateLoginListener();
//     controller.activatePass1Listener();
//     controller.activatePass2Listener();
//     controller.activateEmailListener();

// });

const str = '222-22-22';
const reg = /^\d\d\d-\d\d-\d\d$/;
/*
const reg = /^\d\d\d-\d\d-\d\d$/;

const reg = /^\d{3}-\d{2}-\d{2}$/;

const reg = /^\d{3}(-\d{2}){2}$/;


*/
console.log(reg.test(str));